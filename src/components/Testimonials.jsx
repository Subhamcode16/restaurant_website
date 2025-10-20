import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah Johnson', text: 'An absolutely magical dining experience. Every dish was a masterpiece!', rating: 5 },
    { name: 'Michael Chen', text: 'The ambiance, the service, the food - everything was perfect. Highly recommend!', rating: 5 },
    { name: 'Emma Davis', text: 'Best restaurant in town. The chef\'s creativity shines through every plate.', rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold text-charcoal mb-4">What Guests Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-charcoal/80 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-mutedGold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-mutedGold" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-charcoal/60">Verified Guest</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;