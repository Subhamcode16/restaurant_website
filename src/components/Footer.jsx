import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 bg-neutral-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-50 mb-4">Find Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                <p className="text-stone-300">123 Culinary Street<br />New York, NY 10001</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <p className="text-stone-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <p className="text-stone-300">hello@savoria.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-50 mb-4">Opening Hours</h3>
            <div className="space-y-2 text-stone-300">
              <p><Clock className="w-4 h-4 inline mr-2 text-amber-500" />Mon-Thu: 11am - 10pm</p>
              <p><Clock className="w-4 h-4 inline mr-2 text-amber-500" />Fri-Sat: 11am - 11pm</p>
              <p><Clock className="w-4 h-4 inline mr-2 text-amber-500" />Sunday: 10am - 9pm</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-50 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-charcoal" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-charcoal" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-charcoal" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-50/10 pt-8 text-center">
          <p className="text-stone-400">
            © 2025 Savoria Restaurant — Made with ❤️ and good food.
          </p>
          <div className="mt-4 space-x-6 text-sm">
            <a href="#" className="text-stone-400 hover:text-amber-500 transition">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-amber-500 transition">Terms of Service</a>
            <a href="#" className="text-stone-400 hover:text-amber-500 transition">Book Again</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;