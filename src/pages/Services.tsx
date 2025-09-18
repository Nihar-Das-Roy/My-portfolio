import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  MessageSquare,
  Search,
  Palette
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'social-media',
      title: 'Social Media Management',
      icon: Users,
      color: 'blue',
      description: 'Transform your social media presence into a powerful lead generation and brand building machine.',
      benefits: [
        'Strategic content calendar development',
        'Community management and engagement',
        'Brand voice and visual identity creation',
        'Hashtag research and optimization',
        'Competitor analysis and benchmarking',
        'Monthly performance reporting'
      ],
      results: '3x average engagement increase within 60 days'
    },
    {
      id: 'paid-advertising',
      title: 'Paid Advertising',
      icon: Target,
      color: 'green',
      description: 'Data-driven advertising campaigns that generate qualified leads and maximize your return on ad spend.',
      benefits: [
        'Google Ads campaign setup and optimization',
        'Facebook and Instagram advertising',
        'Advanced audience targeting and retargeting',
        'A/B testing and conversion optimization',
        'Landing page optimization',
        'Real-time performance monitoring'
      ],
      results: '5x average ROAS across all campaigns'
    },
    {
      id: 'website-development',
      title: 'Website Development',
      icon: Globe,
      color: 'purple',
      description: 'High-converting websites that turn visitors into customers and rank well in search engines.',
      benefits: [
        'Responsive web design and development',
        'SEO-optimized site architecture',
        'Conversion rate optimization',
        'Fast loading speed optimization',
        'Content management system setup',
        'Analytics and tracking implementation'
      ],
      results: '40% average conversion rate improvement'
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      icon: TrendingUp,
      color: 'orange',
      description: 'Systematic lead generation funnels that attract, nurture, and convert your ideal customers.',
      benefits: [
        'Lead magnet creation and optimization',
        'Email marketing automation setup',
        'Sales funnel development',
        'CRM integration and management',
        'Lead scoring and qualification',
        'Pipeline optimization and reporting'
      ],
      results: '250% increase in qualified leads on average'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-200',
        button: 'bg-orange-600 hover:bg-orange-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Services That Drive Growth
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to help your business thrive in the digital landscape. 
            Each service is crafted to deliver measurable results and sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={colors.text} size={32} />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 mb-6`}>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className={colors.text} size={20} />
                      <span className="font-semibold text-slate-900">Proven Results:</span>
                    </div>
                    <p className="text-slate-700 mt-1">{service.results}</p>
                  </div>

                  <Link
                    to="/contact"
                    className={`${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center`}
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>

                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={`https://images.pexels.com/photos/${
                        service.id === 'social-media' ? '267371' :
                        service.id === 'paid-advertising' ? '590041' :
                        service.id === 'website-development' ? '196644' :
                        '3184291'
                      }/pexels-photo-${
                        service.id === 'social-media' ? '267371' :
                        service.id === 'paid-advertising' ? '590041' :
                        service.id === 'website-development' ? '196644' :
                        '3184291'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600">
              Specialized services to complement your digital marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
              <p className="text-slate-600">
                Comprehensive SEO strategies to improve your search engine rankings and organic traffic.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-pink-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Content Marketing</h3>
              <p className="text-slate-600">
                Strategic content creation that engages your audience and establishes thought leadership.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Brand Design</h3>
              <p className="text-slate-600">
                Professional brand identity design including logos, color schemes, and visual guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Let's discuss your specific needs and create a customized strategy for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-slate-900 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;