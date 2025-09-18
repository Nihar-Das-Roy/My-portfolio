import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'CEO, StyleHub Fashion',
      company: 'E-commerce Fashion Brand',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Nihar transformed our entire digital presence. Our revenue increased by 450% in just 6 months, and our social media engagement skyrocketed. His strategic approach and attention to detail are unmatched. I couldn't be happier with the results!",
      results: 'Revenue increased by 450% in 6 months'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Owner, Spice Garden Restaurants',
      company: 'Restaurant Chain',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Working with Nihar was a game-changer for our restaurant chain. He helped us expand to three new locations by doubling our foot traffic and increasing online orders by 350%. His local marketing expertise is phenomenal.",
      results: '200% increase in foot traffic, 3 new locations opened'
    },
    {
      id: 3,
      name: 'David Park',
      title: 'CTO, TechFlow Solutions',
      company: 'B2B SaaS Company',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Nihar's lead generation system completely revolutionized our sales process. Our conversion rate from MQL to customer jumped from 2% to 12%, and our sales cycle was cut in half. The ROI has been incredible.",
      results: 'MQL conversion rate increased by 500%, sales cycle reduced by 50%'
    },
    {
      id: 4,
      name: 'Dr. Lisa Thompson',
      title: 'Practice Owner, WellCare Medical',
      company: 'Healthcare Practice',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "As a healthcare professional, I was skeptical about digital marketing. But Nihar's approach was professional and results-driven. New patient appointments increased by 180%, and we're now ranking #1 for all our key local searches.",
      results: '180% increase in new patient appointments'
    },
    {
      id: 5,
      name: 'Amanda Foster',
      title: 'Owner, FitLife Studio',
      company: 'Fitness Studio',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "After the pandemic, I thought we'd never recover. Nihar's social media strategy and community building approach brought us back stronger than ever. Our membership grew by 220% and member retention is at an all-time high of 85%.",
      results: 'Membership increased by 220%, 85% retention rate'
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'Real Estate Agent, Premium Properties',
      company: 'Real Estate',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Nihar's lead generation system changed my entire business model. I went from chasing unqualified leads to having 150+ qualified prospects monthly. My closed deals increased by 300% and the quality of leads is exceptional.",
      results: '150+ qualified leads monthly, 300% increase in closed deals'
    },
    {
      id: 7,
      name: 'Rachel Martinez',
      title: 'Marketing Director, GreenTech Solutions',
      company: 'Environmental Technology',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Nihar doesn't just execute campaigns; he becomes a true partner in your business growth. His strategic insights and data-driven approach helped us achieve a 6.2x ROAS across all our advertising campaigns.",
      results: '6.2x return on ad spend achieved'
    },
    {
      id: 8,
      name: 'Tom Anderson',
      title: 'Founder, Artisan Coffee Co.',
      company: 'Coffee Roasting Business',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Starting with a small local coffee roasting business, Nihar helped us build a national brand. Our online sales grew by 400% and we now ship coast to coast. His e-commerce expertise is outstanding.",
      results: 'Online sales increased by 400%, expanded nationally'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about working with me 
            and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="text-yellow-400" size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Results Highlight */}
              <div className="bg-slate-50 rounded-lg p-3 mb-6">
                <p className="text-sm font-semibold text-slate-900">
                  Key Result: {testimonial.results}
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.title}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by 50+ Businesses
            </h2>
            <p className="text-xl text-slate-300">
              Here's what my clients achieve on average
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-lg font-semibold mb-1">Average Rating</div>
              <p className="text-slate-400 text-sm">Based on 50+ reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-lg font-semibold mb-1">Average ROI Increase</div>
              <p className="text-slate-400 text-sm">Within 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-lg font-semibold mb-1">Client Retention Rate</div>
              <p className="text-slate-400 text-sm">Long-term partnerships</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-1">Support Available</div>
              <p className="text-slate-400 text-sm">Always here to help</p>
            </div>
          </div>
        </div>

        {/* Industry Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Industries I've Worked With
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'E-commerce', 'Healthcare', 'Restaurants', 'Technology', 
              'Fitness', 'Real Estate', 'Professional Services', 'Manufacturing',
              'Education', 'Financial Services', 'Beauty & Wellness', 'Home Services'
            ].map((industry, index) => (
              <div key={index} className="bg-slate-100 rounded-lg p-4 text-center hover:bg-slate-200 transition-colors">
                <span className="text-slate-700 font-medium text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Video Testimonials Coming Soon
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Hear directly from my clients about their success stories and results
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Get Notified When Available
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-yellow-400 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Let's discuss how I can help you achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors"
            >
              Start Your Success Story
            </a>
            <a
              href="/portfolio"
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-900 hover:text-white transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;