"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function PTaaSDashboard() {
 return (
 <section id="dashboard" className="py-20 bg-white/95 backdrop-blur-sm">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">The Dashboard</h2>
 <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
 With our PTaaS reporting platform, you can access a dashboard to track any findings discovered.
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
 <ScrollAnimation animation="slide-right" delay={0.2}>
 <div>
 <h3 className="text-3xl font-bold text-charcoal mb-6">Real-Time Overview Of Findings</h3>
 <p className="text-lg text-charcoal/70 mb-8">
 The findings will appear in real time as they are discovered by our testers and will be ranked Critical,
 High, Medium, or Low.
 </p>

 <div className="space-y-4">
 <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200 ">
 <div className="flex items-center">
 <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
 <span className="font-semibold text-red-800 ">Critical Vulnerabilities</span>
 </div>
 <Badge className="bg-red-600 text-white">3</Badge>
 </div>

 <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200 ">
 <div className="flex items-center">
 <AlertTriangle className="w-5 h-5 text-orange-600 mr-3" />
 <span className="font-semibold text-orange-800 ">High Risk</span>
 </div>
 <Badge className="bg-orange-600 text-white">7</Badge>
 </div>

 <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200 ">
 <div className="flex items-center">
 <Clock className="w-5 h-5 text-yellow-600 mr-3" />
 <span className="font-semibold text-yellow-800 ">Medium Risk</span>
 </div>
 <Badge className="bg-yellow-600 text-white">12</Badge>
 </div>

 <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200 ">
 <div className="flex items-center">
 <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
 <span className="font-semibold text-green-800 ">Low Risk</span>
 </div>
 <Badge className="bg-green-600 text-white">5</Badge>
 </div>
 </div>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-left" delay={0.4}>
 <div className="relative">
 <div className="bg-white p-4 rounded-2xl shadow-2xl">
 <Image
 src="/images/insights-findings-desktop.png"
 width={700}
 height={500}
 alt="Insights Dashboard - Real-time Findings Overview"
 className="rounded-xl"
 />
 </div>
 <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brandyellow rounded-full opacity-20"></div>
 </div>
 </ScrollAnimation>
 </div>

 <ScrollAnimation animation="fade" delay={0.6}>
 <div className="text-center mb-12">
 <h3 className="text-3xl font-bold text-charcoal mb-4">Breakdowns and Recommendations</h3>
 <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
 Previous reports will be available to view, and the platform will allow you to keep track of ongoing
 projects and be updated on testing progress.
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <ScrollAnimation animation="slide-up" delay={0.8}>
 <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white ">
 <CardHeader className="pb-4">
 <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mb-4">
 <BarChart3 className="w-6 h-6 text-charcoal " />
 </div>
 <CardTitle className="text-xl text-charcoal ">Detailed Reports</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-charcoal/70 ">
 Access comprehensive penetration testing reports with detailed vulnerability descriptions, impact
 assessments, and remediation guidance.
 </p>
 </CardContent>
 </Card>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-up" delay={0.9}>
 <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white ">
 <CardHeader className="pb-4">
 <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mb-4">
 <Clock className="w-6 h-6 text-charcoal " />
 </div>
 <CardTitle className="text-xl text-charcoal ">Progress Tracking</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-charcoal/70 ">
 Monitor the progress of ongoing penetration tests in real-time, with updates as our testers discover
 new vulnerabilities.
 </p>
 </CardContent>
 </Card>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-up" delay={1.0}>
 <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white ">
 <CardHeader className="pb-4">
 <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mb-4">
 <CheckCircle className="w-6 h-6 text-charcoal " />
 </div>
 <CardTitle className="text-xl text-charcoal ">Historical Data</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-charcoal/70 ">
 Review previous penetration testing reports and track your security improvements over time with
 historical data analysis.
 </p>
 </CardContent>
 </Card>
 </ScrollAnimation>
 </div>
 </div>
 </section>
 )
}
