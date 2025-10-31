import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative z-10 py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} className="relative h-[500px] rounded-2xl shadow-2xl flex items-center justify-center"
          >
            <img src={`${import.meta.env.BASE_URL}assets/story-telling.jpg`} alt="Chef preparing a dish" className="w-full h-full object-cover rounded-2xl z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-serif font-bold text-amber-50">Our Story</h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              On 1st April 1999, We have opened our first restaurant in Chiba, Japan.Since then, our grilled Chicken has been enjoyed and now we operates 17 restaurants in Japan including 4 in GINZA, 7 in Canada, 1 in Indonesia, 7 in India, 1 in USA, and 1 in Sri Lanka.            </p>
            <p className="text-lg text-stone-300 leading-relaxed">
              Today, we continue to honor traditional cooking methods while embracing innovation, crafting dishes that tell stories and warm hearts. Every ingredient is carefully selected, every recipe perfected with love.
            </p>
            <div className="pt-4">
              <h3 className="text-2xl font-serif font-semibold text-amber-50 mb-2">Chef Maria Rodriguez</h3>
              <p className="text-stone-300  italic">"Cooking is not just my profession, it's my love language."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;