import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nihar Das Roy</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Helping businesses grow with strategic digital marketing, high-converting websites, 
              and data-driven advertising campaigns that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-300 hover:text-yellow-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="text-slate-300 hover:text-yellow-400 transition-colors">Process</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-slate-300">+880 1827610848</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-slate-300">nihar@dasroy.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-slate-300">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Nihar Das Roy. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;