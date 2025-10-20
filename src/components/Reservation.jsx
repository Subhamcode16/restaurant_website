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
    <section className="py-24 bg-charcoal">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-serif font-bold text-warmWhite mb-4">Book Your Table</h2>
          <p className="text-warmWhite/70">Reserve your spot for an unforgettable experience</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-warmWhite/5 backdrop-blur-sm p-8 rounded-2xl border border-warmWhite/10"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-3 bg-warmWhite/10 border border-warmWhite/20 rounded-lg text-warmWhite placeholder-warmWhite/50 focus:outline-none focus:border-mutedGold"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="px-4 py-3 bg-warmWhite/10 border border-warmWhite/20 rounded-lg text-warmWhite placeholder-warmWhite/50 focus:outline-none focus:border-mutedGold"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <input
              type="date"
              required
              className="px-4 py-3 bg-warmWhite/10 border border-warmWhite/20 rounded-lg text-warmWhite focus:outline-none focus:border-mutedGold"
            />
            <input
              type="time"
              required
              className="px-4 py-3 bg-warmWhite/10 border border-warmWhite/20 rounded-lg text-warmWhite focus:outline-none focus:border-mutedGold"
            />
            <input
              type="number"
              placeholder="Guests"
              min="1"
              required
              className="px-4 py-3 bg-warmWhite/10 border border-warmWhite/20 rounded-lg text-warmWhite placeholder-warmWhite/50 focus:outline-none focus:border-mutedGold"
            />
          </div>
          <textarea
            placeholder="Special Requests (Optional)"
            rows="3"
            className="w-full px-4 py-3 bg-warmWhite/10 border border-warmWhite/20 rounded-lg text-warmWhite placeholder-warmWhite/50 focus:outline-none focus:border-mutedGold mb-6"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-4 bg-mutedGold text-charcoal font-semibold rounded-full hover:bg-mutedGold/90 transition-all duration-300"
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
              <p className="text-warmWhite text-lg">Your table is waiting. See you soon! 🎉</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};;

export default Reservation;