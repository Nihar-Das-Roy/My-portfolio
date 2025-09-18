import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Globe, Users, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Turn Your Digital Presence Into{' '}
                <span className="text-yellow-400">Revenue Growth</span>
              </h1>
              <p className="text-xl mb-8 text-slate-300 leading-relaxed">
                I help businesses generate qualified leads and maximize ROI through strategic social media management, 
                high-converting websites, and data-driven paid advertising campaigns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  Hire Me Today
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-colors text-center"
                >
                  See My Work
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>50+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400" size={20} />
                  <span>4.9/5 Client Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-700 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Nihar Das Roy - Digital Marketing Specialist"
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Nihar Das Roy</h3>
                  <p className="text-slate-300">Digital Marketing Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Services That Drive Results
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to grow your business and maximize your ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
              <p className="text-slate-600 mb-4">Strategic content creation and community building that converts followers into customers.</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Paid Advertising</h3>
              <p className="text-slate-600 mb-4">Data-driven ad campaigns on Google, Facebook, and Instagram that generate qualified leads.</p>
              <Link to="/services" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Website Development</h3>
              <p className="text-slate-600 mb-4">High-converting websites optimized for user experience and search engine visibility.</p>
              <Link to="/services" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Lead Generation</h3>
              <p className="text-slate-600 mb-4">Systematic lead generation funnels that attract and convert your ideal customers.</p>
              <Link to="/services" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real metrics from real clients who trusted me with their digital growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-lg font-semibold mb-2">Average ROI Increase</div>
              <p className="text-slate-300">Clients see 3x return on their marketing investment within 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">Projects Completed</div>
              <p className="text-slate-300">Successfully delivered digital marketing solutions across various industries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Support & Monitoring</div>
              <p className="text-slate-300">Continuous optimization and support to ensure sustained growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Let's discuss your goals and create a customized strategy that drives real results
          </p>
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;