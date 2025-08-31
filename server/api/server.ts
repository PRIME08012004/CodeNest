import express, { Response, Request } from "express"
import dotenv from "dotenv"
import http from "http"
import cors from "cors"
import { SocketEvent, SocketId } from "../src/types/socket"
import { USER_CONNECTION_STATUS, User } from "../src/types/user"
import { Server } from "socket.io"
import path from "path"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// Vercel serverless function handler
export default function handler(req: Request, res: Response) {
  // Handle HTTP requests
  if (req.method === 'GET') {
    res.status(200).json({ message: 'CodeNest API Server' })
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'Request received' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

// For local development
if (process.env.NODE_ENV !== 'production') {
  const server = http.createServer(app)
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
    maxHttpBufferSize: 1e8,
    pingTimeout: 60000,
  })

  let userSocketMap: User[] = []

  // Function to get all users in a room
  function getUsersInRoom(roomId: string): User[] {
    return userSocketMap.filter((user) => user.roomId == roomId)
  }

  // Function to get room id by socket id
  function getRoomId(socketId: SocketId): string | null {
    const roomId = userSocketMap.find(
      (user) => user.socketId === socketId
    )?.roomId

    if (!roomId) {
      console.error("Room ID is undefined for socket ID:", socketId)
      return null
    }
    return roomId
  }

  function getUserBySocketId(socketId: SocketId): User | null {
    const user = userSocketMap.find((user) => user.socketId === socketId)
    if (!user) {
      console.error("User not found for socket ID:", socketId)
      return null
    }
    return user
  }

  io.on("connection", (socket) => {
    // Handle user actions
    socket.on(SocketEvent.JOIN_REQUEST, ({ roomId, username }) => {
      // Check is username exist in the room
      const isUsernameExist = getUsersInRoom(roomId).filter(
        (u) => u.username === username
      )
      if (isUsernameExist.length > 0) {
        io.to(socket.id).emit(SocketEvent.USERNAME_EXISTS)
        return
      }

      const user = {
        username,
        roomId,
        status: USER_CONNECTION_STATUS.ONLINE,
        cursorPosition: 0,
        typing: false,
        socketId: socket.id,
        currentFile: null,
      }
      userSocketMap.push(user)
      socket.join(roomId)
      socket.broadcast.to(roomId).emit(SocketEvent.USER_JOINED, { user })
      const users = getUsersInRoom(roomId)
      io.to(socket.id).emit(SocketEvent.JOIN_ACCEPTED, { user, users })
    })

    socket.on("disconnecting", () => {
      const user = getUserBySocketId(socket.id)
      if (!user) return
      const roomId = user.roomId
      socket.broadcast
        .to(roomId)
        .emit(SocketEvent.USER_DISCONNECTED, { user })
      userSocketMap = userSocketMap.filter((u) => u.socketId !== socket.id)
      socket.leave(roomId)
    })

    // Add other socket event handlers here...
  })

  const PORT = process.env.PORT || 3001
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
