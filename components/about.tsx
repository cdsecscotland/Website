"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Award, Users, Calendar } from "lucide-react"

const teamMembers = [
  {
    name: "William Wright",
    role: "Founder & Lead Penetration Tester",
    description: "Scotland's First Chartered Cyber Security Professional with over 15 years of experience",
    image: "/images/team-member-1.jpg",
    certifications: ["CREST CRT", "OSCP", "CISSP"],
  },
  {
    name: "Cassius Edison",
    role: "Senior Security Consultant",
    description: "Internationally recognised cyber expert specializing in advanced persistent threats",
    image: "/images/team-member-2.jpg",
    certifications: ["CEH", "GCIH", "SANS"],
  },
  {
    name: "Conor Agnew",
    role: "Compliance & Risk Specialist",
    description: "Expert in regulatory compliance and risk management frameworks",
    image: "/images/team-member-3.jpg",
    certifications: ["CISA", "CRISC", "ISO 27001"],
  },
]


const stats = [
  { icon: Calendar, label: "Founded", value: "2021" },
  { icon: Users, label: "Team Members", value: "15+" },
  { icon: Award, label: "Certifications", value: "25+" },
  { icon: MapPin, label: "Global Offices", value: "3" },
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-enhanced">
            About Closed Door Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Leading cyber security consultancy protecting businesses from evolving digital threats</p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-lightblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-lightblue" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-orange font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
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
