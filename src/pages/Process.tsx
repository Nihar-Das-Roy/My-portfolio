import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Search, 
  PenTool, 
  Rocket, 
  BarChart3, 
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Clock,
  Target
} from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Strategy',
      icon: MessageSquare,
      duration: 'Week 1',
      description: 'We start with a comprehensive consultation to understand your business, goals, target audience, and current challenges.',
      activities: [
        'Business goals and objectives assessment',
        'Target audience analysis and persona development',
        'Competitor research and market analysis',
        'Current marketing audit and gap identification',
        'Budget allocation and timeline planning'
      ],
      deliverables: 'Strategic roadmap and project timeline'
    },
    {
      number: 2,
      title: 'Research & Planning',
      icon: Search,
      duration: 'Week 1-2',
      description: 'Deep dive into market research, audience insights, and competitive analysis to create a data-driven strategy.',
      activities: [
        'Keyword research and SEO analysis',
        'Social media audit and content gap analysis',
        'Customer journey mapping',
        'Channel selection and budget allocation',
        'KPI definition and tracking setup'
      ],
      deliverables: 'Detailed strategy document and campaign blueprints'
    },
    {
      number: 3,
      title: 'Creation & Development',
      icon: PenTool,
      duration: 'Week 2-4',
      description: 'Develop all creative assets, campaigns, and technical implementations based on the approved strategy.',
      activities: [
        'Website/landing page development and optimization',
        'Creative asset design (graphics, videos, copy)',
        'Ad campaign setup and targeting configuration',
        'Email sequences and automation workflows',
        'Analytics and tracking implementation'
      ],
      deliverables: 'Ready-to-launch campaigns and assets'
    },
    {
      number: 4,
      title: 'Launch & Implementation',
      icon: Rocket,
      duration: 'Week 4-5',
      description: 'Execute the strategy across all channels with careful monitoring and immediate optimization.',
      activities: [
        'Campaign launch across selected channels',
        'Initial performance monitoring and adjustments',
        'A/B testing implementation',
        'Quality assurance and troubleshooting',
        'Team training and handover (if applicable)'
      ],
      deliverables: 'Live campaigns and initial performance report'
    },
    {
      number: 5,
      title: 'Monitor & Analyze',
      icon: BarChart3,
      duration: 'Ongoing',
      description: 'Continuous monitoring of campaign performance with detailed analysis and regular reporting.',
      activities: [
        'Daily performance monitoring and alerts',
        'Weekly data analysis and insights',
        'Monthly comprehensive reporting',
        'ROI tracking and attribution analysis',
        'Competitor performance benchmarking'
      ],
      deliverables: 'Weekly insights and monthly performance reports'
    },
    {
      number: 6,
      title: 'Optimize & Scale',
      icon: RefreshCw,
      duration: 'Ongoing',
      description: 'Continuous optimization based on data insights to improve performance and scale successful campaigns.',
      activities: [
        'Performance optimization based on data',
        'Budget reallocation to high-performing channels',
        'Creative refresh and new variant testing',
        'Audience expansion and lookalike creation',
        'Strategy refinement and scaling planning'
      ],
      deliverables: 'Optimized campaigns and scaling recommendations'
    }
  ];

  const methodologies = [
    {
      title: 'Data-Driven Approach',
      icon: BarChart3,
      description: 'Every decision is backed by solid data and analytics, ensuring campaigns are optimized for maximum ROI.'
    },
    {
      title: 'Agile Marketing',
      icon: RefreshCw,
      description: 'Quick iterations and continuous improvement based on real-time performance data and market feedback.'
    },
    {
      title: 'Customer-Centric Focus',
      icon: Target,
      description: 'All strategies are built around your customers\' needs, behaviors, and preferences for maximum impact.'
    },
    {
      title: 'Transparent Communication',
      icon: MessageSquare,
      description: 'Regular updates, clear reporting, and open communication throughout the entire project lifecycle.'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            My Proven Process
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to digital marketing that ensures consistent results and 
            measurable growth for every client. Here's exactly how we'll work together.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {step.title}
                      </h2>
                      <div className="flex items-center text-slate-600 mt-1">
                        <Clock size={16} className="mr-1" />
                        <span className="text-sm font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Key Activities:</h3>
                    <ul className="space-y-2">
                      {step.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-slate-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">Deliverables:</h4>
                    <p className="text-slate-700">{step.deliverables}</p>
                  </div>
                </div>

                <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-12 text-center">
                    <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="text-slate-700" size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Step {step.number}</h3>
                    <p className="text-slate-600">{step.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodologies */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              My Core Methodologies
            </h2>
            <p className="text-xl text-slate-300">
              The principles that guide every project and ensure consistent success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-slate-900" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{method.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-slate-600">
              Most projects follow this general timeline, though specifics may vary based on scope
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1-2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks</h3>
              <p className="text-slate-600">Strategy & Planning Phase</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2-4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks</h3>
              <p className="text-slate-600">Development & Launch</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">∞</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ongoing</h3>
              <p className="text-slate-600">Optimization & Growth</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Process FAQs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                How long before I see results?
              </h3>
              <p className="text-slate-600">
                While some improvements can be seen immediately, significant results typically 
                begin showing within 30-60 days, with substantial growth occurring by month 3-6.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What if the strategy needs changes?
              </h3>
              <p className="text-slate-600">
                I continuously monitor performance and make adjustments as needed. If major 
                strategy pivots are required, we'll discuss and implement changes together.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                How involved will I need to be?
              </h3>
              <p className="text-slate-600">
                Your involvement level is flexible. I can handle everything independently or 
                work collaboratively based on your preferences and availability.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What happens after the project ends?
              </h3>
              <p className="text-slate-600">
                I provide comprehensive handover documentation and offer ongoing support packages 
                to ensure continued success and growth.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Let's schedule a strategy session to discuss your goals and how my process can help you achieve them
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
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-slate-900 transition-colors"
            >
              See Results First
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;