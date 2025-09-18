import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Calendar,
  Linkedin,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Thank You for Reaching Out!
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            I've received your message and will get back to you within 24 hours. 
            In the meantime, feel free to check out my portfolio or schedule a call directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Send Another Message
            </button>
            <a
              href="https://calendly.com/nihardasroy"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Start Your Success Story
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence and drive real business growth? 
            Get in touch today for a free consultation and custom strategy proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="paid-ads">Paid Advertising</option>
                      <option value="website">Website Development</option>
                      <option value="lead-gen">Lead Generation</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-900 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under ₹50,000/month</option>
                      <option value="5k-10k">₹50,000 - ₹1,00,000/month</option>
                      <option value="10k-25k">₹1,00,000 - ₹2,50,000/month</option>
                      <option value="25k-50k">₹2,50,000 - ₹5,00,000/month</option>
                      <option value="50k-plus">₹5,00,000+/month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Describe your business, goals, current challenges, and what you hope to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>

              <p className="text-sm text-slate-600 mt-4 text-center">
                I'll respond within 24 hours with a custom strategy proposal
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            {/* Quick Contact */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Phone className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-slate-300">+91 98765 43210</p>
                    <p className="text-sm text-slate-400">Available Mon-Fri, 9 AM - 7 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Mail className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">nihar@dasroy.com</p>
                    <p className="text-sm text-slate-400">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <MapPin className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-slate-300">Mumbai, India</p>
                    <p className="text-sm text-slate-400">Serving clients globally</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Clock className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-slate-300">Mon - Fri: 9 AM - 7 PM IST</p>
                    <p className="text-sm text-slate-400">Emergency support available</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="https://calendly.com/nihardasroy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors text-center"
              >
                <Calendar className="mx-auto mb-2" size={24} />
                <h3 className="font-bold">Book a Call</h3>
                <p className="text-sm opacity-90">Schedule consultation</p>
              </a>

              <a
                href="https://wa.me/+8801736-726537"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors text-center"
              >
                <MessageSquare className="mx-auto mb-2" size={24} />
                <h3 className="font-bold">WhatsApp</h3>
                <p className="text-sm opacity-90">Quick messages</p>
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    How quickly can we start working together?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    I can typically start new projects within 1-2 weeks, depending on current workload and project scope.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Do you work with businesses outside India?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Yes! I work with clients globally and have experience with international markets and time zones.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    What's included in your consultation?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Free 30-minute strategy session, current marketing audit, and custom recommendations document.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Do you offer ongoing support?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Yes, I offer various ongoing support packages for campaign management, optimization, and consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;