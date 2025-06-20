"use client"

import React, { ErrorInfo, ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryState {
 hasError: boolean
 error: Error | null
 errorInfo: ErrorInfo | null
}

interface ErrorBoundaryProps {
 children: ReactNode
 fallback?: ReactNode
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
 constructor(props: ErrorBoundaryProps) {
 super(props)
 this.state = {
 hasError: false,
 error: null,
 errorInfo: null,
 }
 }

 static getDerivedStateFromError(error: Error): ErrorBoundaryState {
 return {
 hasError: true,
 error,
 errorInfo: null,
 }
 }

 componentDidCatch(error: Error, errorInfo: ErrorInfo) {
 console.error("Error caught by boundary:", error, errorInfo)
 this.setState({
 error,
 errorInfo,
 })
 }

 handleReset = () => {
 this.setState({
 hasError: false,
 error: null,
 errorInfo: null,
 })
 // Reload the page to reset the app state
 window.location.reload()
 }

 render() {
 if (this.state.hasError) {
 if (this.props.fallback) {
 return <>{this.props.fallback}</>
 }

 return (
 <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
 <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg">
 <div className="text-center">
 <h1 className="text-2xl font-bold text-gray-900 mb-4">
 Something went wrong
 </h1>
 <p className="text-gray-600 mb-6">
 We apologize for the inconvenience. The application encountered an error.
 </p>
 <Button onClick={this.handleReset} className="w-full">
 Reload Page
 </Button>
 {process.env.NODE_ENV === "development" && this.state.error && (
 <details className="mt-6 text-left">
 <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 ">
 Error details
 </summary>
 <pre className="mt-2 text-xs text-red-600 overflow-auto p-2 bg-gray-100 rounded">
 {this.state.error.toString()}
 {this.state.errorInfo && this.state.errorInfo.componentStack}
 </pre>
 </details>
 )}
 </div>
 </div>
 </div>
 )
 }

 return this.props.children
 }
}