"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, Phone, MapPin, Clock } from "lucide-react"
import HubSpotForm from "./hubspot-form"

const offices = [
 {
 country: "United Kingdom",
 location: "Outer Hebrides, Scotland",
 phone: "+44131 460 4180",
 email: "info@cdsec.co.uk",
 hours: "9:00 AM - 5:00 PM GMT",
 },
 {
 country: "United States",
 location: "Des Moines, IA",
 phone: "+1 (515) 123-4567",
 email: "info@cdsecus.com",
 hours: "9:00 AM - 5:00 PM CST",
 },
 {
 country: "United Arab Emirates",
 location: "Dubai, UAE",
 phone: "+971 4 123 4567",
 email: "info@cdsec.ae",
 hours: "9:00 AM - 5:00 PM GST",
 },
]

export default function ContactSection() {
 return (
 <section id="contact" className="py-16 bg-gray-50/95 backdrop-blur-sm">
 <div className="container">
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to secure your business? Contact our team of certified experts today.</p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
 {/* HubSpot Contact Form */}
 <Card className="shadow-xl border-0 bg-white ">
 <CardHeader>
 <CardTitle className="text-2xl text-gray-900">Contact Form</CardTitle>
 </CardHeader>
 <CardContent>
 <HubSpotForm portalId="144330761" formId="1cb05ab1-3bb5-4624-a0a3-b60813086a24" className="hubspot-contact-form" />
 </CardContent>
 </Card>

 {/* Contact Information */}
 <div className="space-y-6">
 <Card className="shadow-xl border-0 bg-white ">
 <CardContent className="p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
 <div className="space-y-4">
 <div className="flex items-start">
 <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
 <Phone className="w-6 h-6 text-orange" />
 </div>
 <div>
 <h4 className="font-semibold text-gray-900">Phone</h4>
 <p className="text-gray-600">+44131 460 4180</p>
 </div>
 </div>
 <div className="flex items-start">
 <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
 <Mail className="w-6 h-6 text-orange" />
 </div>
 <div>
 <h4 className="font-semibold text-gray-900">Email</h4>
 <p className="text-gray-600">info@cdsec.co.uk</p>
 </div>
 </div>
 <div className="flex items-start">
 <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
 <Calendar className="w-6 h-6 text-orange" />
 </div>
 <div>
 <h4 className="font-semibold text-gray-900">Schedule a Meeting</h4>
 <a
 href="https://app.apollo.io/meetings/william-wright"
 target="_blank"
 rel="noopener noreferrer"
 className="text-orange hover:text-deeporange underline"
 >
 Book a consultation
 </a>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>

 </div>
 </div>

 {/* Global Offices */}
 <div>
 <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Global Offices</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {offices.map((office, index) => (
 <Card
 key={index}
 className="shadow-lg border-0 hover:shadow-xl transition-shadow bg-white "
 >
 <CardContent className="p-6 text-center">
 <div className="w-16 h-16 bg-lightblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
 <MapPin className="w-8 h-8 text-lightblue" />
 </div>
 <h4 className="text-xl font-bold text-gray-900 mb-2">{office.country}</h4>
 <p className="text-gray-600 mb-4">{office.location}</p>
 <div className="space-y-2 text-sm">
 <div className="flex items-center justify-center">
 <Phone className="w-4 h-4 mr-2 text-gray-400" />
 <span>{office.phone}</span>
 </div>
 <div className="flex items-center justify-center">
 <Mail className="w-4 h-4 mr-2 text-gray-400" />
 <span>{office.email}</span>
 </div>
 <div className="flex items-center justify-center">
 <Clock className="w-4 h-4 mr-2 text-gray-400" />
 <span>{office.hours}</span>
 </div>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </div>
 </section>
 )
}
