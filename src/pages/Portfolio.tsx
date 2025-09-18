import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, ShoppingCart, Target, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Fashion Brand Growth',
      client: 'StyleHub Fashion',
      industry: 'E-commerce',
      image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'StyleHub was struggling with low online sales and poor social media engagement. Their conversion rate was below 1% and they were spending heavily on ads with minimal returns.',
      solution: 'Implemented a comprehensive digital strategy including social media management, conversion-optimized website redesign, targeted Facebook and Instagram ads, and email marketing automation.',
      results: [
        'Revenue increased by 450% in 6 months',
        'Conversion rate improved from 0.8% to 3.2%',
        'Social media following grew from 2K to 25K',
        'Email list expanded by 800%'
      ],
      metrics: {
        revenue: '450%',
        conversion: '300%',
        traffic: '250%',
        roas: '6.2x'
      },
      duration: '6 months',
      services: ['Social Media Management', 'Paid Advertising', 'Website Development', 'Email Marketing']
    },
    {
      id: 2,
      title: 'Local Restaurant Chain Expansion',
      client: 'Spice Garden Restaurants',
      industry: 'Food & Beverage',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'A local restaurant chain wanted to expand to new locations but lacked brand awareness and struggled to attract customers during off-peak hours.',
      solution: 'Developed location-based social media campaigns, Google Ads for local searches, food photography, and loyalty program implementation with targeted promotions.',
      results: [
        'Foot traffic increased by 200% across all locations',
        'Online orders grew by 350%',
        'Customer retention improved by 60%',
        'Successfully opened 3 new locations'
      ],
      metrics: {
        traffic: '200%',
        orders: '350%',
        retention: '60%',
        locations: '3 new'
      },
      duration: '8 months',
      services: ['Local SEO', 'Social Media Management', 'Paid Advertising', 'Brand Photography']
    },
    {
      id: 3,
      title: 'SaaS Lead Generation System',
      client: 'TechFlow Solutions',
      industry: 'Technology',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'A B2B SaaS company was generating low-quality leads and had a lengthy sales cycle. Their marketing qualified lead (MQL) to customer conversion rate was only 2%.',
      solution: 'Built comprehensive lead generation funnels with targeted LinkedIn ads, content marketing, webinar series, and marketing automation to nurture leads through the sales process.',
      results: [
        'MQL to customer conversion rate increased to 12%',
        'Sales cycle reduced from 90 to 45 days',
        'Lead generation cost decreased by 40%',
        'Monthly recurring revenue grew by 280%'
      ],
      metrics: {
        conversion: '500%',
        cycle: '50%',
        cost: '40%',
        mrr: '280%'
      },
      duration: '10 months',
      services: ['Lead Generation', 'Content Marketing', 'LinkedIn Advertising', 'Marketing Automation']
    },
    {
      id: 4,
      title: 'Healthcare Practice Digital Transformation',
      client: 'WellCare Medical Group',
      industry: 'Healthcare',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'A medical practice was losing patients to competitors and had minimal online presence. They relied solely on referrals and had no digital marketing strategy.',
      solution: 'Created a professional website, implemented local SEO, managed Google My Business, developed educational content, and launched targeted Google Ads for medical services.',
      results: [
        'New patient appointments increased by 180%',
        'Online visibility improved - ranking #1 for key local searches',
        'Patient review score increased from 3.2 to 4.8 stars',
        'Appointment booking efficiency improved by 70%'
      ],
      metrics: {
        appointments: '180%',
        visibility: '#1 ranking',
        reviews: '4.8 stars',
        efficiency: '70%'
      },
      duration: '4 months',
      services: ['Website Development', 'Local SEO', 'Google Ads', 'Reputation Management']
    },
    {
      id: 5,
      title: 'Fitness Studio Membership Growth',
      client: 'FitLife Studio',
      industry: 'Fitness & Wellness',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'A fitness studio was struggling to maintain membership numbers post-pandemic and needed to attract new members while retaining existing ones.',
      solution: 'Launched Instagram and TikTok campaigns featuring workout videos, member transformations, virtual class promotions, and referral programs with social media integration.',
      results: [
        'Membership increased by 220% in 5 months',
        'Social media engagement rate grew by 400%',
        'Class attendance improved by 150%',
        'Member retention rate increased to 85%'
      ],
      metrics: {
        membership: '220%',
        engagement: '400%',
        attendance: '150%',
        retention: '85%'
      },
      duration: '5 months',
      services: ['Social Media Management', 'Video Content Creation', 'Community Building', 'Referral Marketing']
    },
    {
      id: 6,
      title: 'Real Estate Agent Lead Generation',
      client: 'Premium Properties Group',
      industry: 'Real Estate',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'A real estate agent was spending too much time on unqualified leads and needed a system to attract serious buyers and sellers in their target market.',
      solution: 'Developed Facebook and Google Ads campaigns targeting specific demographics and property interests, created lead magnets, and implemented automated follow-up sequences.',
      results: [
        'Generated 150+ qualified leads per month',
        'Closed deals increased by 300%',
        'Average deal value increased by 25%',
        'Lead-to-close ratio improved from 8% to 22%'
      ],
      metrics: {
        leads: '150/month',
        deals: '300%',
        value: '25%',
        ratio: '22%'
      },
      duration: '7 months',
      services: ['Lead Generation', 'Facebook Advertising', 'Google Ads', 'Marketing Automation']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Portfolio & Case Studies
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. Explore detailed case studies showcasing how strategic 
            digital marketing has transformed my clients' growth and revenue.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-full ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {study.title}
                    </h2>
                    <p className="text-slate-600 mb-6">
                      <span className="font-semibold">Client:</span> {study.client} • 
                      <span className="font-semibold"> Duration:</span> {study.duration}
                    </p>

                    {/* Problem */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                        <Target className="mr-2 text-red-500" size={20} />
                        Problem
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                        <TrendingUp className="mr-2 text-blue-500" size={20} />
                        Solution
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        {study.solution}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                        <ShoppingCart className="mr-2 text-green-500" size={20} />
                        Results
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="bg-green-100 rounded-full p-1 mt-0.5">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <span className="text-slate-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="bg-slate-50 rounded-xl p-6">
                      <h4 className="font-bold text-slate-900 mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-yellow-600">{value}</div>
                            <div className="text-sm text-slate-600 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Be My Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Let's discuss how we can achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/testimonials"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Read Testimonials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;