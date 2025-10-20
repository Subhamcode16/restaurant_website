import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = () => {
   return (
    <section id="home" className="relative min-h-screen bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-warmWhite leading-tight">
                Where Cravings Meet Their Perfect Match
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-warmWhite/75 leading-relaxed"
            >
              Discover bold flavors and unforgettable dishes crafted just for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(214, 167, 95, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mutedGold text-charcoal font-semibold rounded-full hover:bg-mutedGold/90 transition-all duration-300"
              >
                Book Your Table
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-2 text-warmWhite/90"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm">4.8 / 5 Average Rating</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] md:h-[600px]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-br from-orange-900 to-amber-800 shadow-2xl overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-6xl">🍜</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 right-12 w-56 h-56 rounded-full bg-gradient-to-br from-red-900 to-orange-800 shadow-2xl overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-5xl">🍛</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-64 right-0 w-48 h-48 rounded-full bg-gradient-to-br from-amber-900 to-yellow-800 shadow-2xl overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-4xl">🍝</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-12 text-4xl opacity-60"
            >
              🍃
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 right-32 text-3xl opacity-60"
            >
              🍃
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;