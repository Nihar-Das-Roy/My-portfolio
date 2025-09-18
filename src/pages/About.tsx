import React from 'react';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hi, I'm Nihar Das Roy
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              A passionate digital marketing specialist with over 5 years of experience helping businesses 
              transform their online presence into powerful revenue-generating machines.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              My journey began in 2019 when I discovered the incredible potential of digital marketing 
              to level the playing field for small and medium businesses. Since then, I've helped over 
              50 businesses achieve remarkable growth through strategic marketing campaigns.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="font-semibold">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="font-semibold">50+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="font-semibold">Google Ads Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="font-semibold">Facebook Blueprint</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Nihar Das Roy working"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            My Expertise & Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Data-Driven Strategy</h3>
              <p className="text-slate-600 leading-relaxed">
                Every campaign I create is backed by thorough market research, competitor analysis, 
                and performance metrics. I believe in making decisions based on data, not assumptions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer-Centric Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                Understanding your target audience is key to success. I dive deep into customer personas, 
                pain points, and behavior patterns to create campaigns that truly resonate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Oriented</h3>
              <p className="text-slate-600 leading-relaxed">
                I measure success by your business growth. Whether it's increased leads, sales, 
                or brand awareness, everything I do is designed to deliver measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            My Journey
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2019 - The Beginning</h3>
                <p className="text-slate-600">
                  Started my journey as a freelance digital marketer, working with local businesses 
                  to establish their online presence and drive growth through social media.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2021 - Specialization & Growth</h3>
                <p className="text-slate-600">
                  Expanded services to include paid advertising and website development. Achieved 
                  Google Ads and Facebook Blueprint certifications to enhance my expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2023 - Full-Service Solutions</h3>
                <p className="text-slate-600">
                  Developed comprehensive lead generation systems and automated marketing funnels, 
                  helping clients achieve 300% average ROI increase.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2024 - Scale & Innovation</h3>
                <p className="text-slate-600">
                  Continuing to innovate with AI-powered marketing strategies and advanced analytics, 
                  helping businesses stay ahead in the competitive digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            My Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-slate-600">
                Clear communication, honest reporting, and no hidden costs. 
                You'll always know exactly what we're doing and why.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-slate-600">
                I'm committed to delivering exceptional work that exceeds expectations 
                and drives real business results.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-slate-600">
                I see myself as an extension of your team, working collaboratively 
                toward your business goals and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;