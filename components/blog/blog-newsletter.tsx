"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function BlogNewsletter() {
 const [email, setEmail] = useState("")
 const [subscribed, setSubscribed] = useState(false)
 const [loading, setLoading] = useState(false)

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault()
 setLoading(true)

 // Simulate API call
 await new Promise((resolve) => setTimeout(resolve, 1000))

 setSubscribed(true)
 setLoading(false)
 setEmail("")
 }

 return (
 <section className="py-20 bg-charcoal ">
 <div className="container">
 <ScrollAnimation animation="fade">
 <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
 <CardContent className="p-8 text-center">
 <div className="w-16 h-16 bg-brandyellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
 <Mail className="w-8 h-8 text-brandyellow" />
 </div>

 <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Ahead of Cyber Threats</h3>

 <p className="text-white/80 mb-8 text-lg">
 Get the latest cybersecurity insights, threat intelligence, and security best practices delivered to
 your inbox weekly.
 </p>

 {subscribed ? (
 <div className="flex items-center justify-center gap-3 text-green-400">
 <CheckCircle className="w-6 h-6" />
 <span className="text-lg font-semibold">Thank you for subscribing!</span>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
 <Input
 type="email"
 placeholder="Enter your email address"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
 />
 <Button
 type="submit"
 disabled={loading}
 className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8"
 >
 {loading ? "Subscribing..." : "Subscribe"}
 </Button>
 </form>
 )}

 <p className="text-white/60 text-sm mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
 </CardContent>
 </Card>
 </ScrollAnimation>
 </div>
 </section>
 )
}
