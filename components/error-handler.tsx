"use client"

import { useEffect } from "react"

export default function ErrorHandler() {
 useEffect(() => {
 // Handle unhandled JavaScript errors
 const handleError = (event: ErrorEvent) => {
 console.error("Unhandled error:", event.error)
 
 // Send error to monitoring service in production
 if (process.env.NODE_ENV === "production") {
 // Replace with your error monitoring service
 // e.g., Sentry.captureException(event.error)
 }
 }

 // Handle unhandled promise rejections
 const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
 console.error("Unhandled promise rejection:", event.reason)
 
 // Prevent the default browser behavior of logging to console
 event.preventDefault()
 
 // Send error to monitoring service in production
 if (process.env.NODE_ENV === "production") {
 // Replace with your error monitoring service
 // e.g., Sentry.captureException(event.reason)
 }
 }

 // Add event listeners
 window.addEventListener("error", handleError)
 window.addEventListener("unhandledrejection", handleUnhandledRejection)

 // Cleanup
 return () => {
 window.removeEventListener("error", handleError)
 window.removeEventListener("unhandledrejection", handleUnhandledRejection)
 }
 }, [])

 // This component doesn't render anything
 return null
}