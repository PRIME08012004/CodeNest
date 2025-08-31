/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./*.html"],
    theme: {
        extend: {
            colors: {
                // Global dark theme colors
                dark: "#000000",          // Pure black
                darkHover: "#1a1a1a",     // Slightly lighter black
                darkSecondary: "#1a1a1a", // Same as hover for consistency
                darkTertiary: "#262626",  // Slightly lighter
                light: "#ffffff",         // White text
                lightSecondary: "#a3a3a3", // Light gray text
                
                // Main UI colors
                primary: "#000000",       // Pure black
                primaryHover: "#1a1a1a",  // Slightly lighter black
                primaryLight: "#333333",  // Dark gray
                
                accent: "#666666",        // Medium gray
                accentHover: "#808080",   // Light gray
                accentLight: "#999999",   // Lighter gray
                
                secondary: "#4d4d4d",     // Dark gray
                secondaryHover: "#666666", // Medium gray
                secondaryLight: "#808080", // Light gray
                
                tertiary: "#333333",      // Very dark gray
                tertiaryHover: "#4d4d4d", // Dark gray
                tertiaryLight: "#666666", // Medium gray
                
                // Semantic colors
                success: "#198754",       // Professional green
                warning: "#fd7e14",       // Professional orange
                danger: "#dc3545",        // Professional red
                info: "#0dcaf0",          // Professional cyan
                
                // Text and borders
                muted: "#6c757d",         // Muted gray text
                border: "#dee2e6",        // Light border
                borderLight: "#f8f9fa",   // Very light border
                
                // Glass effects for white theme
                glass: "rgba(255, 255, 255, 0.8)",
                glassDark: "rgba(0, 0, 0, 0.05)",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "Fira Code", "monospace"],
                heading: ["Poppins", "Inter", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "slide-up": "slideUp 0.5s ease-out",
                "fade-in": "fadeIn 0.3s ease-in",
                "scale-in": "scaleIn 0.2s ease-out",
                "shimmer": "shimmer 2s linear infinite",
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.8), 0 0 30px rgba(99, 102, 241, 0.4)' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                }
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'neon': '0 0 5px currentColor, 0 0 20px currentColor, 0 0 35px currentColor',
                'neon-lg': '0 0 10px currentColor, 0 0 30px currentColor, 0 0 60px currentColor',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
                'glass-lg': '0 25px 50px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    plugins: [],
}
