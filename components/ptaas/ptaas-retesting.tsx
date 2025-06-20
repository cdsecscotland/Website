"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, CheckCircle, Zap, Clock } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function PTaaSRetesting() {
  return (
    <section className="py-20 bg-gradient-to-br from-brandyellow/5 to-brightyellow/5">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-brandyellow text-brandyellow">
              Live Re-testing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Continuous Validation During Testing
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Test implemented remediations in real-time during your penetration test project to ensure maximum efficiency and immediate validation of security improvements.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animation="slide-right" delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold text-charcoal mb-6">
                Real-Time Remediation Validation
              </h3>
              <p className="text-lg text-charcoal/70 mb-8">
                As your team implements fixes for discovered vulnerabilities, our testers can immediately re-test and validate the effectiveness of your remediation efforts. This live feedback loop ensures you're not waiting weeks to know if your fixes actually work.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Immediate Validation</h4>
                    <p className="text-charcoal/70">
                      Get instant confirmation that your remediation efforts have successfully addressed the vulnerability
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Accelerated Remediation</h4>
                    <p className="text-charcoal/70">
                      Identify and fix implementation issues immediately rather than discovering them weeks later
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mr-4 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Reduced Time to Security</h4>
                    <p className="text-charcoal/70">
                      Achieve a secure state faster by validating fixes as they're implemented
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={0.4}>
            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-brandyellow to-brightyellow text-charcoal">
                <CardTitle className="flex items-center text-xl">
                  <RotateCcw className="w-6 h-6 mr-3" />
                  Live Re-testing Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-brandyellow text-charcoal flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Vulnerability Discovered</h4>
                      <p className="text-sm text-charcoal/70">Finding reported immediately through the platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-brandyellow text-charcoal flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Remediation Implemented</h4>
                      <p className="text-sm text-charcoal/70">Your team applies the recommended fix</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-brandyellow text-charcoal flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Re-test Request</h4>
                      <p className="text-sm text-charcoal/70">Request immediate validation through the platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Validation Complete</h4>
                      <p className="text-sm text-charcoal/70">Immediate confirmation of successful remediation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade" delay={0.6}>
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Agile Security for Modern Development
              </h3>
              <p className="text-charcoal/70 mb-6 max-w-3xl mx-auto">
                Live re-testing aligns perfectly with agile software development methodologies, enabling continuous security improvements throughout the Software Development Life Cycle (SDLC). This approach supports DevSecOps practices by providing immediate security feedback during development and deployment cycles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Sprint Integration</h4>
                  <p className="text-sm text-charcoal/70">Validate security fixes within development sprints</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <RotateCcw className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Continuous Security</h4>
                  <p className="text-sm text-charcoal/70">Maintain security throughout rapid development cycles</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Quality Assurance</h4>
                  <p className="text-sm text-charcoal/70">Ensure high-quality security implementations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}