"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, Phone, MapPin, Clock, Shield } from "lucide-react"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"
import HubSpotForm from "./hubspot-form"
import ScrollAnimation from "./scroll-animation"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "+44131 460 4180",
    description: "Speak directly with our security experts",
    gradient: "from-blue-500 to-cyan-500",
    available: "9:00 AM - 5:00 PM GMT"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@cdsec.co.uk",
    description: "Get detailed responses within 24 hours",
    gradient: "from-green-500 to-emerald-500",
    available: "Business Hours"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    value: "Book a consultation",
    description: "30-minute strategy session with our team",
    gradient: "from-purple-500 to-indigo-500",
    available: "Flexible Scheduling",
    href: "https://app.apollo.io/meetings/william-wright"
  }
]

const offices = [
  {
    country: "United Kingdom",
    location: "Outer Hebrides, Scotland",
    phone: "+44131 460 4180",
    email: "uk@cdsec.co.uk",
    hours: "9:00 AM - 5:00 PM GMT",
    flag: "🇬🇧",
    timezone: "GMT"
  },
  {
    country: "United States",
    location: "Des Moines, IA",
    phone: "+1 (515) 123-4567",
    email: "usa@cdsec.co.uk",
    hours: "9:00 AM - 5:00 PM CST",
    flag: "🇺🇸",
    timezone: "CST"
  },
  {
    country: "United Arab Emirates",
    location: "Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "uae@cdsec.co.uk",
    hours: "9:00 AM - 5:00 PM GST",
    flag: "🇦🇪",
    timezone: "GST"
  },
]

const contactTabs = [
  { name: "General Inquiry", icon: Mail },
  { name: "Emergency Response", icon: Shield },
]

export default function HeadlessContact() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-charcoal/50 dark:via-charcoal/95 dark:to-charcoal/50">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
              Ready to secure your business? Contact our team of certified experts today for a consultation.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Contact Form with Tabs */}
          <ScrollAnimation animation="slide-right">
            <Card className="shadow-2xl border-0 bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-brandyellow/10 to-brandyellow/5 border-b border-brandyellow/20">
                <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                  <Tab.List className="flex space-x-1 rounded-lg bg-brandyellow/10 p-1">
                    {contactTabs.map((tab, index) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          cn(
                            "w-full rounded-md py-2.5 px-3 text-sm font-medium leading-5 transition-all duration-200",
                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2",
                            selected
                              ? "bg-white dark:bg-charcoal text-charcoal dark:text-white shadow transform scale-105"
                              : "text-charcoal/70 dark:text-white/70 hover:bg-white/50 dark:hover:bg-charcoal/50"
                          )
                        }
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <tab.icon className="w-4 h-4" />
                          <span className="hidden sm:inline">{tab.name}</span>
                        </div>
                      </Tab>
                    ))}
                  </Tab.List>

                  <Tab.Panels className="mt-4">
                    <Tab.Panel>
                      <CardTitle className="text-2xl text-charcoal dark:text-white">
                        General Inquiry
                      </CardTitle>
                      <p className="text-charcoal/70 dark:text-white/70 mt-2">
                        Get in touch for general questions about our services
                      </p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <CardTitle className="text-2xl text-charcoal dark:text-white flex items-center">
                        <Shield className="w-6 h-6 text-red-500 mr-2" />
                        Emergency Response
                      </CardTitle>
                      <p className="text-charcoal/70 dark:text-white/70 mt-2">
                        24/7 incident response for active security breaches
                      </p>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </CardHeader>
              <CardContent className="p-6">
                {selectedTab === 1 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">
                      Security Incident in Progress?
                    </h3>
                    <p className="text-charcoal/70 dark:text-white/70 mb-6">
                      Call our emergency hotline immediately for 24/7 incident response support.
                    </p>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg transition-all duration-200 hover:shadow-lg">
                      Emergency Hotline: +44131 460 4180
                    </Button>
                  </div>
                ) : (
                  <div className="transition-all duration-300">
                    <HubSpotForm 
                      portalId="144330761" 
                      formId="1cb05ab1-3bb5-4624-a0a3-b60813086a24" 
                      className="hubspot-contact-form" 
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Enhanced Contact Methods */}
          <ScrollAnimation animation="slide-left">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                        "bg-gradient-to-r shadow-lg group-hover:shadow-xl",
                        method.gradient
                      )}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-charcoal dark:text-white text-lg">
                          {method.title}
                        </h4>
                        {method.href ? (
                          <a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brandyellow hover:text-brightyellow font-medium transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-charcoal dark:text-white font-medium">
                            {method.value}
                          </p>
                        )}
                        <p className="text-charcoal/70 dark:text-white/70 text-sm mt-1">
                          {method.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <Clock className="w-4 h-4 text-brandyellow mr-1" />
                          <span className="text-xs text-charcoal/60 dark:text-white/60">
                            {method.available}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Enhanced Global Offices */}
        <ScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-charcoal dark:text-white mb-4">
              Our Global Offices
            </h3>
            <p className="text-lg text-charcoal/70 dark:text-white/70">
              Local expertise with global reach across three continents
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6 text-center relative">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                    {office.flag}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-brandyellow/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brandyellow/30 transition-colors duration-300">
                      <MapPin className="w-8 h-8 text-brandyellow" />
                    </div>
                    <h4 className="text-xl font-bold text-charcoal dark:text-white mb-2 group-hover:text-brandyellow transition-colors duration-300">
                      {office.country}
                    </h4>
                    <p className="text-charcoal/70 dark:text-white/70 mb-4 font-medium">
                      {office.location}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center text-charcoal/60 dark:text-white/60">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center justify-center text-charcoal/60 dark:text-white/60">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center justify-center text-charcoal/60 dark:text-white/60">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                    <div className="mt-4 px-3 py-1 bg-brandyellow/10 text-brandyellow text-xs font-medium rounded-full inline-block">
                      {office.timezone}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}