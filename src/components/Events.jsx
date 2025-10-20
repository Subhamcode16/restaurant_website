import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    { name: 'Wine Tasting Night', date: 'Nov 15, 2025', desc: 'Explore premium wines', emoji: '🍷' },
    { name: 'Chef\'s Table Experience', date: 'Nov 22, 2025', desc: '6-course tasting menu', emoji: '👨‍🍳' },
    { name: 'Live Jazz Dinner', date: 'Nov 29, 2025', desc: 'Music & fine dining', emoji: '🎷' },
  ];

  return (
    <section id="events" className="py-24 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold text-charcoal mb-4">Upcoming Experiences</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="h-64 bg-gradient-to-br from-amber-800 to-orange-900 flex items-center justify-center">
                <span className="text-8xl">{event.emoji}</span>
              </div>
              <div className="p-6 bg-charcoal">
                <h3 className="text-2xl font-serif font-semibold text-warmWhite mb-2">{event.name}</h3>
                <p className="text-mutedGold mb-2">{event.date}</p>
                <p className="text-warmWhite/70 mb-4">{event.desc}</p>
                <button className="w-full px-4 py-2 bg-mutedGold text-charcoal rounded-full hover:bg-mutedGold/90 transition">
                  Reserve Spot
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;