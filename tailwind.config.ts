import type { Config } from "tailwindcss"

const config = {
 content: [
 "./pages/**/*.{ts,tsx}",
 "./components/**/*.{ts,tsx}",
 "./app/**/*.{ts,tsx}",
 "./src/**/*.{ts,tsx}",
 "*.{js,ts,jsx,tsx,mdx}",
 ],
 prefix: "",
 theme: {
 container: {
 center: true,
 padding: "2rem",
 screens: {
 "2xl": "1400px",
 },
 },
 extend: {
 colors: {
 // Brand colors from logo
 brandyellow: "#FFD700",
 brightyellow: "#FFC107",
 lightyellow: "#FFF8DC",
 brandgray: "#A9A9A9",
 darkgray: "#696969",
 lightgray: "#D3D3D3",
 charcoal: "#2F2F2F",
 white: "#FFFFFF",
 black: "#000000",

 border: "hsl(var(--border))",
 input: "hsl(var(--input))",
 ring: "hsl(var(--ring))",
 background: "hsl(var(--background))",
 foreground: "hsl(var(--foreground))",
 primary: {
 DEFAULT: "hsl(var(--primary))",
 foreground: "hsl(var(--primary-foreground))",
 },
 secondary: {
 DEFAULT: "hsl(var(--secondary))",
 foreground: "hsl(var(--secondary-foreground))",
 },
 destructive: {
 DEFAULT: "hsl(var(--destructive))",
 foreground: "hsl(var(--destructive-foreground))",
 },
 muted: {
 DEFAULT: "hsl(var(--muted))",
 foreground: "hsl(var(--muted-foreground))",
 },
 accent: {
 DEFAULT: "hsl(var(--accent))",
 foreground: "hsl(var(--accent-foreground))",
 },
 popover: {
 DEFAULT: "hsl(var(--popover))",
 foreground: "hsl(var(--popover-foreground))",
 },
 card: {
 DEFAULT: "hsl(var(--card))",
 foreground: "hsl(var(--card-foreground))",
 },
 },
 borderRadius: {
 lg: "var(--radius)",
 md: "calc(var(--radius) - 2px)",
 sm: "calc(var(--radius) - 4px)",
 },
 keyframes: {
 "accordion-down": {
 from: { height: "0" },
 to: { height: "var(--radix-accordion-content-height)" },
 },
 "accordion-up": {
 from: { height: "var(--radix-accordion-content-height)" },
 to: { height: "0" },
 },
 float: {
 "0%, 100%": { transform: "translateY(0px)" },
 "50%": { transform: "translateY(-20px)" },
 },
 "slide-diagonal": {
 "0%": { transform: "translateX(-100%) translateY(100%)" },
 "100%": { transform: "translateX(100%) translateY(-100%)" },
 },
 "rotate-slow": {
 "0%": { transform: "rotate(0deg)" },
 "100%": { transform: "rotate(360deg)" },
 },
 "pulse-glow": {
 "0%, 100%": { opacity: "0.4" },
 "50%": { opacity: "0.8" },
 },
 "gradient-x": {
 "0%, 100%": { "background-position": "0% 50%" },
 "50%": { "background-position": "100% 50%" },
 },
 "float-path": {
 "0%, 100%": { transform: "translateX(0) translateY(0)" },
 "33%": { transform: "translateX(30px) translateY(-30px)" },
 "66%": { transform: "translateX(-20px) translateY(20px)" },
 },
 },
 animation: {
 "accordion-down": "accordion-down 0.2s ease-out",
 "accordion-up": "accordion-up 0.2s ease-out",
 float: "float 6s ease-in-out infinite",
 "slide-diagonal": "slide-diagonal 20s linear infinite",
 "rotate-slow": "rotate-slow 30s linear infinite",
 "pulse-glow": "pulse-glow 3s ease-in-out infinite",
 "gradient-x": "gradient-x 3s ease infinite",
 "float-path": "float-path 20s ease-in-out infinite",
 },
 },
 },
 plugins: [require("tailwindcss-animate"), require("@headlessui/tailwindcss")],
} satisfies Config

export default config
