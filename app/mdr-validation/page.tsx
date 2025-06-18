import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Target, Clock, CheckCircle, AlertTriangle, Zap } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function MDRValidationPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container py-12">
        {/* Hero Section */}
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-brandyellow text-brandyellow">
              MDR Validation Testing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
              Validate Your MDR Solution
            </h1>
            <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto mb-8">
              Test the effectiveness of your Managed Detection and Response (MDR) service with realistic attack simulations
            </p>
            <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-bold">
              <Link href="/contact">Request MDR Testing</Link>
            </Button>
          </div>
        </ScrollAnimation>

        {/* What is MDR Validation */}
        <ScrollAnimation animation="slide-up">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="w-6 h-6 mr-2 text-brandyellow" />
                What is MDR Validation Testing?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-charcoal/70 dark:text-white/70">
                MDR Validation Testing evaluates the effectiveness of your Managed Detection and Response service 
                through controlled attack simulations. We test whether your MDR provider can detect, analyze, and 
                respond to realistic threats in your environment.
              </p>
              <p className="text-charcoal/70 dark:text-white/70">
                This testing helps ensure you're getting value from your MDR investment and identifies gaps 
                in detection capabilities before real attackers exploit them.
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Testing Approach */}
        <ScrollAnimation animation="slide-up" delay={0.1}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-8 text-center">
              Our Testing Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-blue-500" />
                    Detection Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 dark:text-white/70">
                    Simulate realistic attack techniques to test if your MDR can detect malicious activities 
                    across endpoints, network, and cloud environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-red-500" />
                    Response Validation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 dark:text-white/70">
                    Evaluate the quality and speed of your MDR provider's incident response, 
                    including alert triage, investigation, and containment actions.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-500" />
                    Time-to-Detection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 dark:text-white/70">
                    Measure how quickly threats are detected and escalated, 
                    ensuring your MDR meets agreed service level objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        {/* Test Scenarios */}
        <ScrollAnimation animation="slide-up" delay={0.2}>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Zap className="w-6 h-6 mr-2 text-brandyellow" />
                Common Test Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Credential Theft</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Simulate credential harvesting and lateral movement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Malware Deployment</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Test detection of various malware families and techniques
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Data Exfiltration</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Validate detection of sensitive data being stolen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Persistence Mechanisms</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Test detection of backdoors and persistence techniques
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Living-off-the-Land</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Use legitimate tools for malicious purposes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Cloud Attacks</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Test cloud-specific attack detection capabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Supply Chain Attacks</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Simulate third-party compromise scenarios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Insider Threats</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70">
                        Test detection of malicious insider activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Benefits */}
        <ScrollAnimation animation="slide-up" delay={0.3}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-8 text-center">
              Why Test Your MDR?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 text-brandyellow mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Validate Investment</h3>
                  <p className="text-sm text-charcoal/70 dark:text-white/70">
                    Ensure your MDR service provides the protection you're paying for
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Identify Gaps</h3>
                  <p className="text-sm text-charcoal/70 dark:text-white/70">
                    Discover blind spots in your detection and response capabilities
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Improve Coverage</h3>
                  <p className="text-sm text-charcoal/70 dark:text-white/70">
                    Work with your MDR provider to enhance detection rules
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Measure Performance</h3>
                  <p className="text-sm text-charcoal/70 dark:text-white/70">
                    Benchmark response times against industry standards
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation animation="fade" delay={0.4}>
          <Card className="bg-gradient-to-r from-brandyellow/10 to-brightyellow/10 border-brandyellow/20">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-4">
                Ready to Test Your MDR?
              </h2>
              <p className="text-charcoal/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
                Contact us to discuss your MDR validation requirements and schedule a comprehensive test 
                of your detection and response capabilities.
              </p>
              <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-bold">
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </main>
  )
}