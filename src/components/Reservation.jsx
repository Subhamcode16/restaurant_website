import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reservation = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <section className="relative z-10 py-24 bg-transparent">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-serif font-bold text-amber-50 mb-4">Book Your Table</h2>
          <p className="text-stone-300">Reserve your spot for an unforgettable experience</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-stone-50/5 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-3 bg-stone-50/5 border border-stone-300 rounded-lg text-stone-300 placeholder-charcoal/50 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="px-4 py-3 bg-stone-50/5 border border-stone-300 rounded-lg text-stone-300 placeholder-charcoal/50 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <input
              type="date"
              required
              className="px-4 py-3 bg-stone-50/5 border border-stone-300 rounded-lg text-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
            <input
              type="time"
              required
              className="px-4 py-3 bg-stone-50/5 border border-stone-300 rounded-lg text-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
            <input
              type="number"
              placeholder="Guests"
              min="1"
              required
              className="px-4 py-3 bg-stone-50/5 border border-stone-300 rounded-lg text-stone-300 placeholder-charcoal/50 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>
          <textarea
            placeholder="Special Requests (Optional)"
            rows="3"
            className="w-full px-4 py-3 bg-stone-50/5 border border-stone-300 rounded-lg text-stone-300 placeholder-charcoal/50 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 mb-6"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-4 bg-stone-50/5 border border-amber-600  text-amber-500 rounded-full hover:bg-amber-500 hover:text-amber-50 transition-all duration-300"
          >
            Reserve My Table
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-6 bg-green-900/50 border border-green-500/50 rounded-xl text-center"
            >
              <p className="text-stone-300 text-lg">Your table is waiting. See you soon! 🎉</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};;

export default Reservation;