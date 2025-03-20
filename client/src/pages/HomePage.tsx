import Lottie from "lottie-react";
import illustration from "@/assets/lotties/Animation - 1742324569376.json"
import FormComponent from "@/components/forms/FormComponent"
import animationData from "@/assets/lotties/Animation - 1742324569376.json";

// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                <Lottie 
                        animationData={animationData} 
                        className="mx-auto w-[250px] sm:w-[400px]" 
                        loop={true} 
                    />
                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage
