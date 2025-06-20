"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Calendar, Target, TrendingDown, DollarSign, CheckCircle } from "lucide-react"
import ScrollAnimation from "../scroll-animation"
import Link from "next/link"

export default function PTaaSScanning() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-green-600 text-green-600">
              Included with Every Project
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Quarterly Vulnerability Scanning
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every penetration testing project includes 12 months of quarterly vulnerability scanning using PCI-DSS approved scanners to ensure ongoing compliance and vulnerability management.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animation="slide-right" delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold text-charcoal mb-6">
                Continuous Security Monitoring
              </h3>
              <p className="text-lg text-charcoal/70 mb-8">
                Maintain visibility into your public-facing infrastructure with high-quality vulnerability scanning that delivers only the vulnerabilities that matter. Our PCI-DSS approved scanning ensures enterprise-grade accuracy and compliance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">PCI-DSS Approved Scanner</h4>
                    <p className="text-charcoal/70">
                      High-quality vulnerability detection using industry-certified scanning technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Relevant Vulnerabilities Only</h4>
                    <p className="text-charcoal/70">
                      Get actionable results without the noise - only vulnerabilities that truly matter
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mr-4 shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Quarterly Schedule</h4>
                    <p className="text-charcoal/70">
                      Regular scanning every quarter for 12 months to maintain compliance and security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={0.4}>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="w-6 h-6 mr-3" />
                  12-Month Scanning Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                    <span className="font-semibold text-charcoal">Q1 Scan</span>
                    <Badge className="bg-green-500 text-white">Month 3</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                    <span className="font-semibold text-charcoal">Q2 Scan</span>
                    <Badge className="bg-green-500 text-white">Month 6</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                    <span className="font-semibold text-charcoal">Q3 Scan</span>
                    <Badge className="bg-green-500 text-white">Month 9</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                    <span className="font-semibold text-charcoal">Q4 Scan</span>
                    <Badge className="bg-green-500 text-white">Month 12</Badge>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Included at no additional cost</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Reduce Infrastructure Costs
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Eliminate the need to invest in and manage your own vulnerability scanner. We provide enterprise-grade scanning capability without the overhead of procurement, licensing, and maintenance.
                </p>
                <ul className="text-sm text-charcoal/70 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No scanner licensing costs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No infrastructure management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No staff training required
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Reduced Vulnerability Management Costs
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Focus your team's time on what matters most. Our expert filtering and analysis means you only receive actionable vulnerabilities, reducing noise and improving efficiency for all organisations.
                </p>
                <ul className="text-sm text-charcoal/70 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Expert result analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    False positive elimination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Prioritised remediation guidance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade" delay={0.8}>
          <Card className="bg-gradient-to-r from-brandyellow/10 to-brightyellow/10 border-brandyellow/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Ongoing Compliance & Security Assurance
              </h3>
              <p className="text-charcoal/70 mb-6 max-w-3xl mx-auto">
                Maintain compliance requirements and demonstrate due diligence with regular vulnerability assessments. Our quarterly scanning helps you stay ahead of emerging threats and maintain a strong security posture throughout the year.
              </p>
              <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
                <Link href="/contact">Learn More About Scanning</Link>
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}