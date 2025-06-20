"use client"

import { useEffect, useState } from "react"

interface GeometricShape {
 id: number
 type: "triangle" | "square" | "circle"
 x: number
 y: number
 size: number
 color: string
 rotation: number
 animationDelay: number
}

export default function DynamicBackground() {
 const [shapes, setShapes] = useState<GeometricShape[]>([])

 useEffect(() => {
 const generateShapes = () => {
 const newShapes: GeometricShape[] = []
 const colors = ["#FFD700", "#FFC107", "#A9A9A9", "#D3D3D3"]
 const types: ("triangle" | "square" | "circle")[] = ["triangle", "square", "circle"]

 for (let i = 0; i < 15; i++) {
 newShapes.push({
 id: i,
 type: types[Math.floor(Math.random() * types.length)],
 x: Math.random() * 100,
 y: Math.random() * 100,
 size: Math.random() * 100 + 50,
 color: colors[Math.floor(Math.random() * colors.length)],
 rotation: Math.random() * 360,
 animationDelay: Math.random() * 10,
 })
 }
 setShapes(newShapes)
 }

 generateShapes()
 }, [])

 const renderShape = (shape: GeometricShape) => {
 const baseStyle = {
 position: "absolute" as const,
 left: `${shape.x}%`,
 top: `${shape.y}%`,
 width: `${shape.size}px`,
 height: `${shape.size}px`,
 transform: `rotate(${shape.rotation}deg)`,
 animationDelay: `${shape.animationDelay}s`,
 }

 switch (shape.type) {
 case "triangle":
 return (
 <div key={shape.id} className="animate-float opacity-20" style={baseStyle}>
 <svg viewBox="0 0 100 100" className="w-full h-full">
 <polygon points="50,10 90,90 10,90" fill={shape.color} className="animate-pulse-glow" />
 </svg>
 </div>
 )
 case "square":
 return (
 <div
 key={shape.id}
 className="animate-float opacity-20"
 style={{
 ...baseStyle,
 backgroundColor: shape.color,
 transform: `rotate(${shape.rotation}deg) scale(0.8)`,
 }}
 />
 )
 case "circle":
 return (
 <div
 key={shape.id}
 className="animate-float opacity-30"
 style={{
 ...baseStyle,
 backgroundColor: shape.color,
 borderRadius: "50%",
 transform: `rotate(${shape.rotation}deg) scale(0.6)`,
 }}
 >
 {/* Dotted pattern like logo */}
 <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow">
 <circle
 cx="50"
 cy="50"
 r="40"
 fill="none"
 stroke="#000"
 strokeWidth="1"
 strokeDasharray="2 4"
 opacity="0.3"
 />
 <circle
 cx="50"
 cy="50"
 r="30"
 fill="none"
 stroke="#000"
 strokeWidth="1"
 strokeDasharray="2 4"
 opacity="0.3"
 />
 <circle
 cx="50"
 cy="50"
 r="20"
 fill="none"
 stroke="#000"
 strokeWidth="1"
 strokeDasharray="2 4"
 opacity="0.3"
 />
 </svg>
 </div>
 )
 default:
 return null
 }
 }

 return (
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 {shapes.map(renderShape)}

 {/* Large geometric shapes similar to logo background - increase opacity */}
 <div className="absolute top-0 left-0 w-96 h-96 opacity-20">
 <svg viewBox="0 0 400 400" className="w-full h-full">
 <polygon points="0,0 200,0 100,200" fill="#FFD700" className="animate-pulse-glow" />
 </svg>
 </div>

 <div className="absolute top-20 right-0 w-80 h-80 opacity-20">
 <svg viewBox="0 0 400 400" className="w-full h-full">
 <polygon points="200,0 400,0 400,200" fill="#A9A9A9" className="animate-pulse-glow" />
 </svg>
 </div>

 <div className="absolute bottom-0 left-1/4 w-72 h-72 opacity-20">
 <svg viewBox="0 0 400 400" className="w-full h-full">
 <polygon points="0,200 200,200 200,400 0,400" fill="#FFC107" className="animate-pulse-glow" />
 </svg>
 </div>

 <div className="absolute bottom-10 right-10 w-64 h-64 opacity-20">
 <svg viewBox="0 0 400 400" className="w-full h-full">
 <polygon points="200,0 400,200 200,400 0,200" fill="#D3D3D3" className="animate-pulse-glow" />
 </svg>
 </div>
 </div>
 )
}
