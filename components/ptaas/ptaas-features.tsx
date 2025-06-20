"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, Shield } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function PTaaSFeatures() {
 return (
 <section className="py-20 bg-lightyellow/20 backdrop-blur-sm">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Booking in New Tests</h2>
 <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
 The platform will enable you to request new tests (and retesting of previous tests) on demand, as well as
 oversee past, present, and future tests. As Closed Door Security uses our own in-house testers, we can
 guarantee lead times significantly below the market average.
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
 <ScrollAnimation animation="slide-right" delay={0.2}>
 <div>
 <h3 className="text-3xl font-bold text-charcoal mb-6">On-Demand Testing</h3>
 <p className="text-lg text-charcoal/70 mb-6">
 We will work closely with your team to help improve your cyber security posture and mitigate business
 risk. Our streamlined booking system ensures rapid deployment of testing resources.
 </p>

 <ul className="space-y-4">
 <li className="flex items-start">
 <div className="w-6 h-6 rounded-full bg-brandyellow flex items-center justify-center mr-3 mt-1">
 <span className="text-charcoal font-bold text-sm">✓</span>
 </div>
 <span className="text-charcoal/80 ">
 Request new penetration tests directly through the platform
 </span>
 </li>
 <li className="flex items-start">
 <div className="w-6 h-6 rounded-full bg-brandyellow flex items-center justify-center mr-3 mt-1">
 <span className="text-charcoal font-bold text-sm">✓</span>
 </div>
 <span className="text-charcoal/80 ">
 Schedule retesting of previously identified vulnerabilities
 </span>
 </li>
 <li className="flex items-start">
 <div className="w-6 h-6 rounded-full bg-brandyellow flex items-center justify-center mr-3 mt-1">
 <span className="text-charcoal font-bold text-sm">✓</span>
 </div>
 <span className="text-charcoal/80 ">
 Track all past, present, and future testing activities
 </span>
 </li>
 <li className="flex items-start">
 <div className="w-6 h-6 rounded-full bg-brandyellow flex items-center justify-center mr-3 mt-1">
 <span className="text-charcoal font-bold text-sm">✓</span>
 </div>
 <span className="text-charcoal/80 ">
 Guaranteed lead times below market average
 </span>
 </li>
 </ul>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-left" delay={0.4}>
 <div className="grid grid-cols-2 gap-6">
 <Card className="bg-white border-none shadow-lg">
 <CardHeader className="text-center pb-4">
 <Calendar className="w-8 h-8 text-brandyellow mx-auto mb-2" />
 <CardTitle className="text-lg text-charcoal ">Flexible Scheduling</CardTitle>
 </CardHeader>
 <CardContent className="text-center">
 <p className="text-sm text-charcoal/70 ">
 Book tests when you need them, with minimal lead times
 </p>
 </CardContent>
 </Card>

 <Card className="bg-white border-none shadow-lg">
 <CardHeader className="text-center pb-4">
 <Clock className="w-8 h-8 text-brandyellow mx-auto mb-2" />
 <CardTitle className="text-lg text-charcoal ">Rapid Deployment</CardTitle>
 </CardHeader>
 <CardContent className="text-center">
 <p className="text-sm text-charcoal/70 ">
 In-house team ensures quick turnaround times
 </p>
 </CardContent>
 </Card>

 <Card className="bg-white border-none shadow-lg">
 <CardHeader className="text-center pb-4">
 <Users className="w-8 h-8 text-brandyellow mx-auto mb-2" />
 <CardTitle className="text-lg text-charcoal ">Expert Team</CardTitle>
 </CardHeader>
 <CardContent className="text-center">
 <p className="text-sm text-charcoal/70 ">
 CREST certified professionals handle all testing
 </p>
 </CardContent>
 </Card>

 <Card className="bg-white border-none shadow-lg">
 <CardHeader className="text-center pb-4">
 <Shield className="w-8 h-8 text-brandyellow mx-auto mb-2" />
 <CardTitle className="text-lg text-charcoal ">Quality Assured</CardTitle>
 </CardHeader>
 <CardContent className="text-center">
 <p className="text-sm text-charcoal/70 ">
 Consistent quality with in-house methodology
 </p>
 </CardContent>
 </Card>
 </div>
 </ScrollAnimation>
 </div>
 </div>
 </section>
 )
}
