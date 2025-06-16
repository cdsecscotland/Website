const TrustIndicators = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <i className="fas fa-shield-alt text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">We prioritize your security with advanced encryption and robust measures.</p>
          </div>
          <div>
            <i className="fas fa-users text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
            <p className="text-gray-600">Join a community of satisfied users who rely on our services.</p>
          </div>
          <div>
            <i className="fas fa-headset text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our dedicated support team is available around the clock to assist you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators
