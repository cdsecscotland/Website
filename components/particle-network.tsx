"use client"

import { useEffect, useRef, useState } from "react"
import { useDisableAnimations } from "@/hooks/use-animation-preferences"

interface Particle {
 x: number
 y: number
 size: number
 speedX: number
 speedY: number
 color: string
}

interface Connection {
 p1: number
 p2: number
 opacity: number
}

export default function ParticleNetwork() {
 const canvasRef = useRef<HTMLCanvasElement>(null)
 const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
 const particlesRef = useRef<Particle[]>([])
 const connectionsRef = useRef<Connection[]>([])
 const animationRef = useRef<number>(0)
 const disableAnimations = useDisableAnimations()

 // Don't render particles on mobile or when animations are disabled
 if (disableAnimations) {
 return null
 }

 // Particle colors optimized for light theme
 const particleColors = [
 "rgba(255, 215, 0, 0.08)", // brandyellow
 "rgba(255, 193, 7, 0.07)", // brightyellow
 "rgba(169, 169, 169, 0.06)", // brandgray
 "rgba(211, 211, 211, 0.05)", // lightgray
 ]
 const lineColor = "rgba(0, 0, 0, 0.03)"
 const bgColor = "transparent"

 useEffect(() => {
 const handleResize = () => {
 if (canvasRef.current) {
 const canvas = canvasRef.current
 // Use viewport height only to prevent scroll issues
 const width = window.innerWidth
 const height = window.innerHeight

 // Set display size (css pixels)
 canvas.style.width = width + "px"
 canvas.style.height = height + "px"

 // Set actual size in memory (scaled to account for extra pixel density)
 const scale = window.devicePixelRatio
 canvas.width = Math.floor(width * scale)
 canvas.height = Math.floor(height * scale)

 // Normalize coordinate system to use css pixels
 const ctx = canvas.getContext("2d")
 if (ctx) {
 ctx.scale(scale, scale)
 }

 setDimensions({ width, height })
 initParticles(width, height)
 }
 }

 const initParticles = (width: number, height: number) => {
 // Distribute particles throughout the entire document height
 const particleCount = Math.min(Math.floor((width * height) / 35000), 100) // Increased max for taller pages
 const particles: Particle[] = []

 for (let i = 0; i < particleCount; i++) {
 particles.push({
 x: Math.random() * width,
 y: Math.random() * height, // Distribute across full document height
 size: Math.random() * 1.5 + 0.5,
 speedX: (Math.random() - 0.5) * 0.3,
 speedY: (Math.random() - 0.5) * 0.3,
 color: particleColors[Math.floor(Math.random() * particleColors.length)],
 })
 }

 particlesRef.current = particles
 findConnections()
 }

 const findConnections = () => {
 const particles = particlesRef.current
 const connections: Connection[] = []
 const connectionDistance = 120

 for (let i = 0; i < particles.length; i++) {
 for (let j = i + 1; j < particles.length; j++) {
 const dx = particles[i].x - particles[j].x
 const dy = particles[i].y - particles[j].y
 const distance = Math.sqrt(dx * dx + dy * dy)

 if (distance < connectionDistance) {
 connections.push({
 p1: i,
 p2: j,
 opacity: (1 - distance / connectionDistance) * 0.3,
 })
 }
 }
 }

 connectionsRef.current = connections
 }

 // Initial setup
 handleResize()

 // Listen for window resize
 window.addEventListener("resize", handleResize)

 // Also update when the document height might change
 let resizeObserver: ResizeObserver | null = null
 
 // Check if ResizeObserver is supported
 if (typeof ResizeObserver !== 'undefined') {
 try {
 resizeObserver = new ResizeObserver(() => {
 handleResize()
 })
 resizeObserver.observe(document.body)
 } catch (error) {
 console.warn('ResizeObserver not supported or failed to initialize:', error)
 }
 }

 return () => {
 window.removeEventListener("resize", handleResize)
 if (resizeObserver) {
 resizeObserver.disconnect()
 }
 cancelAnimationFrame(animationRef.current)
 }
 }, [])

 useEffect(() => {
 if (dimensions.width === 0 || dimensions.height === 0) return

 const animate = () => {
 if (!canvasRef.current) return

 const ctx = canvasRef.current.getContext("2d")
 if (!ctx) return

 // Clear canvas
 ctx.fillStyle = bgColor
 ctx.fillRect(0, 0, dimensions.width, dimensions.height)

 // Update particles
 const particles = particlesRef.current
 for (let i = 0; i < particles.length; i++) {
 const p = particles[i]
 p.x += p.speedX
 p.y += p.speedY

 // Bounce off edges
 if (p.x < 0 || p.x > dimensions.width) p.speedX *= -1
 if (p.y < 0 || p.y > dimensions.height) p.speedY *= -1

 // Only draw particles that are in or near the viewport
 const scrollY = window.scrollY
 const viewportHeight = window.innerHeight
 const buffer = 300 // Draw particles slightly outside viewport too

 if (p.y >= scrollY - buffer && p.y <= scrollY + viewportHeight + buffer) {
 // Draw particle
 ctx.beginPath()
 ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
 ctx.fillStyle = p.color
 ctx.fill()
 }
 }

 // Draw connections with very subtle lines (only for visible particles)
 const connections = connectionsRef.current
 const scrollY = window.scrollY
 const viewportHeight = window.innerHeight
 const buffer = 300

 for (let i = 0; i < connections.length; i++) {
 const c = connections[i]
 const p1 = particles[c.p1]
 const p2 = particles[c.p2]

 // Only draw connections that might be visible
 if (
 (p1.y >= scrollY - buffer && p1.y <= scrollY + viewportHeight + buffer) ||
 (p2.y >= scrollY - buffer && p2.y <= scrollY + viewportHeight + buffer)
 ) {
 ctx.beginPath()
 ctx.moveTo(p1.x, p1.y)
 ctx.lineTo(p2.x, p2.y)
 ctx.strokeStyle = lineColor
 ctx.lineWidth = 0.5
 ctx.stroke()
 }
 }

 // Find new connections less frequently
 if (Math.random() < 0.02) {
 findConnections()
 }

 animationRef.current = requestAnimationFrame(animate)
 }

 const findConnections = () => {
 const particles = particlesRef.current
 const connections: Connection[] = []
 const connectionDistance = 120

 for (let i = 0; i < particles.length; i++) {
 for (let j = i + 1; j < particles.length; j++) {
 const dx = particles[i].x - particles[j].x
 const dy = particles[i].y - particles[j].y
 const distance = Math.sqrt(dx * dx + dy * dy)

 if (distance < connectionDistance) {
 connections.push({
 p1: i,
 p2: j,
 opacity: (1 - distance / connectionDistance) * 0.3,
 })
 }
 }
 }

 connectionsRef.current = connections
 }

 animationRef.current = requestAnimationFrame(animate)

 return () => {
 cancelAnimationFrame(animationRef.current)
 }
 }, [dimensions, bgColor, lineColor])

 // Update the canvas opacity
 return (
 <canvas
 ref={canvasRef}
 className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
 style={{ opacity: 0.9 }} // Increased from 0.4
 />
 )
}
