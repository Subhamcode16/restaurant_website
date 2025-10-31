
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { StarsCanvas } from './ui/stars-canvas'; 

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-neutral-950 overflow-hidden">
      
      <StarsCanvas 
        transparent={false}
        maxStars={800}
        hue={30}  // Warm amber/gold hue 
        brightness={0.6}
        speedMultiplier={0.5}
        twinkleIntensity={15}
        className="z-0"
      />
      
      
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6">
        <div className="max-w-3xl">
          {/* Left Column - Text Content */}
          <div className="space-y-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-50 leading-tight">
                Where Cravings Meet Their Perfect Match
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-stone-50/75 leading-relaxed"
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
                className="px-8 py-4 bg-amber-600 text-neutral-950 font-semibold rounded-full hover:bg-amber-600/90 transition-all duration-300"
              >
                Book Your Table
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-2 text-stone-50/90"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;