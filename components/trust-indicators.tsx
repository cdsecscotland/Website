const TrustIndicators = () => {
 return (
 <section className="bg-gray-50 py-16">
 <div className="container mx-auto text-center">
 <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div>
 <i className="fas fa-shield-alt text-4xl text-blue-500 mb-4"></i>
 <h3 className="text-xl font-semibold mb-2">Live Reporting Platform</h3>
 <p className="text-gray-600">Real-time vulnerability tracking and expert-driven insights for continuous security monitoring.</p>
 </div>
 <div>
 <i className="fas fa-users text-4xl text-green-500 mb-4"></i>
 <h3 className="text-xl font-semibold mb-2">Trusted by Household Names</h3>
 <p className="text-gray-600">Recognised brands and enterprises trust our cybersecurity expertise.</p>
 </div>
 <div>
 <i className="fas fa-headset text-4xl text-purple-500 mb-4"></i>
 <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
 <p className="text-gray-600">Our certified security professionals provide expert guidance when you need it.</p>
 </div>
 </div>
 </div>
 </section>
 )
}

export default TrustIndicators
