"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const plans = [
 {
 name: "Starter",
 price: "£2,500",
 period: "per month",
 description: "Perfect for small businesses and startups",
 features: [
 "Up to 5 web applications",
 "Monthly penetration tests",
 "Basic vulnerability scanning",
 "Email support",
 "Standard reporting",
 "Basic compliance templates",
 ],
 popular: false,
 cta: "Get Quote",
 },
 {
 name: "Professional",
 price: "£5,000",
 period: "per month",
 description: "Ideal for growing companies with multiple assets",
 features: [
 "Up to 15 web applications",
 "Bi-weekly penetration tests",
 "Advanced vulnerability management",
 "Priority support",
 "Custom reporting",
 "Full compliance suite",
 "API security testing",
 "Mobile app testing",
 ],
 popular: true,
 cta: "Get Quote",
 },
 {
 name: "Enterprise",
 price: "Custom",
 period: "pricing",
 description: "For large organisations with complex requirements",
 features: [
 "Unlimited applications",
 "Continuous testing",
 "Dedicated security team",
 "24/7 phone support",
 "Executive dashboards",
 "Custom integrations",
 "On-site consultations",
 "Incident response support",
 ],
 popular: false,
 cta: "Get Quote",
 },
]

export default function PTaaSPricing() {
 return (
 <section className="py-20 bg-white/95 backdrop-blur-sm">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
 Simple, Transparent Pricing
 </h2>
 <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
 Choose the plan that fits your security needs. All plans include our core platform features and expert
 support with flexible engagement options.
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
 {plans.map((plan, index) => (
 <ScrollAnimation key={index} animation="slide-up" delay={0.2 + index * 0.1}>
 <Card
 className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full ${
 plan.popular
 ? "bg-gradient-to-b from-brandyellow/10 to-brightyellow/10 ring-2 ring-brandyellow"
 : "bg-white "
 }`}
 >
 {plan.popular && (
 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
 <Badge className="bg-brandyellow text-charcoal px-4 py-1 text-sm font-semibold">
 <Star className="w-4 h-4 mr-1" />
 Most Popular
 </Badge>
 </div>
 )}

 <CardHeader className="text-center pb-4">
 <CardTitle className="text-2xl text-charcoal ">{plan.name}</CardTitle>
 <div className="mt-4">
 <span className="text-4xl font-bold text-charcoal ">{plan.price}</span>
 <span className="text-charcoal/60 ml-2">/{plan.period}</span>
 </div>
 <p className="text-charcoal/70 mt-2">{plan.description}</p>
 </CardHeader>

 <CardContent>
 <ul className="space-y-3 mb-8">
 {plan.features.map((feature, idx) => (
 <li key={idx} className="flex items-start">
 <Check className="w-5 h-5 text-brandyellow mr-3 mt-0.5 flex-shrink-0" />
 <span className="text-charcoal/80 ">{feature}</span>
 </li>
 ))}
 </ul>

 <Button
 className={`w-full ${
 plan.popular
 ? "bg-charcoal hover:bg-charcoal/90 text-white "
 : "bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white "
 }`}
 size="lg"
 >
 {plan.cta}
 </Button>
 </CardContent>
 </Card>
 </ScrollAnimation>
 ))}
 </div>

 <ScrollAnimation animation="fade" delay={0.8}>
 <div className="text-center mt-12">
 <p className="text-charcoal/70 mb-4">
 All plans include expert consultation • Flexible contracts • Professional support
 </p>
 <p className="text-sm text-charcoal/60 ">
 Need a custom solution?{" "}
 <Button variant="link" className="p-0 h-auto text-brandyellow hover:text-brightyellow">
 Contact our sales team
 </Button>
 </p>
 </div>
 </ScrollAnimation>
 </div>
 </section>
 )
}
