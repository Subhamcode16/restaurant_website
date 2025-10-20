import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-800 to-orange-900 flex items-center justify-center">
              <ChefHat className="w-32 h-32 text-warmWhite/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-serif font-bold text-charcoal">Our Story</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Founded in 2015, Savoria was born from a simple belief: that great food has the power to bring people together and create lasting memories. Our journey began in a small kitchen with big dreams and an unwavering passion for culinary excellence.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Today, we continue to honor traditional cooking methods while embracing innovation, crafting dishes that tell stories and warm hearts. Every ingredient is carefully selected, every recipe perfected with love.
            </p>
            <div className="pt-4">
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-2">Chef Maria Rodriguez</h3>
              <p className="text-charcoal/70 italic">"Cooking is not just my profession, it's my love language."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;