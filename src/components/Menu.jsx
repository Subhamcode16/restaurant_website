import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('Yakitori');
  const tabs = ['Yakitori', 'Sushi', 'Ramen', 'Rice Bowls', 'Appetizers', 'Desserts'];

  const menuItems = {
    Yakitori: [
      { name: 'Special Kushi Course', desc: '5 premium skewers selection', price: '₹580', emoji: '🍢', recommended: true },
      { name: 'Tori Kushi Course', desc: '5 chicken skewers variety', price: '₹480', emoji: '🐔' },
      { name: 'Kawari Dane Kushi Course', desc: '5 unique skewers', price: '₹520', emoji: '🍖' },
      { name: 'Buta Kushi Course', desc: '5 pork skewers', price: '₹380', emoji: '🥓' },
      { name: 'Chicken Meatballs', desc: 'Traditional tsukune skewers', price: '₹230', emoji: '🍡' },
      { name: 'Assorted Yakitori Set', desc: '3 mixed skewers', price: '₹300', emoji: '🍢' },
    ],
    Sushi: [
      { name: 'Jumbo Prawn Roll', desc: '8 pieces', price: '₹1,200', emoji: '🍤', recommended: true },
      { name: 'DYNAMITE Roll', desc: 'Spicy fusion roll, 5 pieces', price: '₹800', emoji: '💥' },
      { name: 'Taj Mahal Roll', desc: 'Signature Indian-Japanese fusion, 8 pieces', price: '₹800', emoji: '🏛️' },
      { name: 'Salmon Cheese Roll', desc: 'Creamy salmon & cheese, 8 pieces', price: '₹800', emoji: '🐟' },
      { name: 'KUURAKU California Roll', desc: 'House special, 8 pieces', price: '₹800', emoji: '🌊' },
      { name: 'Spicy Tuna Roll', desc: '8 pieces', price: '₹800', emoji: '🌶️' },
    ],
    Ramen: [
      { name: 'IEKEI Ramen', desc: 'Rich pork bone broth', price: '₹780', emoji: '🍜', recommended: true },
      { name: 'KOTTERI Ramen', desc: 'Extra rich and creamy', price: '₹780', emoji: '🍥' },
      { name: 'Tan Tan Men', desc: 'Spicy sesame noodles', price: '₹720', emoji: '🌶️' },
      { name: 'Kuuraku Ramen', desc: 'House signature ramen', price: '₹720', emoji: '🏮' },
      { name: 'Tomato Ramen', desc: 'Unique tomato-based broth', price: '₹720', emoji: '🍅' },
      { name: 'Miso Ramen', desc: 'Classic miso flavored', price: '₹740', emoji: '🥢' },
    ],
    'Rice Bowls': [
      { name: 'Katsu Curry', desc: 'Breaded cutlet with curry', price: '₹590', emoji: '🍛', recommended: true },
      { name: 'Chashu Don', desc: 'Braised pork belly rice bowl', price: '₹560', emoji: '🍚' },
      { name: 'Oyako Don', desc: 'Chicken and egg rice bowl', price: '₹450', emoji: '🥚' },
      { name: 'Yakitori Don', desc: 'Grilled chicken skewers on rice', price: '₹450', emoji: '🍗' },
      { name: 'Syogayaki Don', desc: 'Ginger pork rice bowl', price: '₹560', emoji: '🐷' },
      { name: 'Buta Don', desc: 'Pork rice bowl', price: '₹560', emoji: '🍖' },
    ],
    Appetizers: [
      { name: 'Chicken Nanban', desc: 'Fried chicken with tartar sauce', price: '₹480', emoji: '🍗', recommended: true },
      { name: 'Tori-no-Karaage', desc: 'Japanese fried chicken', price: '₹400', emoji: '🐓' },
      { name: 'Ebi Tempura', desc: 'Crispy prawn tempura', price: '₹670', emoji: '🦐' },
      { name: 'Teppan Gyoza', desc: 'Pan-fried dumplings (Non-Veg)', price: '₹445', emoji: '🥟' },
      { name: 'Age Gyoza', desc: 'Deep fried dumplings, 5 pieces', price: '₹280', emoji: '🥟' },
      { name: 'Edamame', desc: 'Steamed soybeans', price: '₹395', emoji: '🫛' },
    ],
    Desserts: [
      { name: 'Matcha Cheese Cake', desc: 'Green tea cheesecake', price: '₹300', emoji: '🍰', recommended: true },
      { name: 'Baked Cheese Cake', desc: 'Classic Japanese style', price: '₹300', emoji: '🧀' },
      { name: 'Yukimi Daifuku', desc: 'Mochi ice cream', price: '₹300', emoji: '🍨' },
      { name: 'Shiratama Zenzai', desc: 'Sweet red bean soup', price: '₹250', emoji: '🍵' },
      { name: 'Annin Tofu', desc: 'Almond jelly dessert', price: '₹225', emoji: '🥛' },
      { name: 'Honjitsuno Sorbet', desc: 'Daily sorbet selection', price: '₹140', emoji: '🍧' },
    ],
  };
  const hoverUnderlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="menu" className=" relative z-10 py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold text-stone-50 mb-4">Our Menu</h2>
          <p className="text-xl text-stone-50/70 italic">"Authentic Japanese flavors from Tokyo to your table"</p>
          <p className="text-sm text-amber-600 mt-2">本格炭火焼 - Authentic Charcoal Grilled</p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center space-x-2 mb-12 flex-wrap gap-2">
          {tabs.map((tab) => (
            <motion.div
              key={tab}
              className="relative cursor-pointer"
              whileHover="visible"
            >
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 transition-colors duration-300 text-sm md:text-base ${
                  activeTab === tab ? 'text-amber-600' : 'text-stone-50'
                }`}
              >
                {tab}
              </button>
              {activeTab === tab ? (
                <motion.div
                  className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-amber-600"
                  layoutId="underline"
                />
              ) : null}
              <motion.div
                className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-stone-50/50 origin-center"
                variants={hoverUnderlineVariants}
                initial="hidden"
              />
            </motion.div>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeTab].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative bg-stone-50/5 backdrop-blur-sm p-6 rounded-xl border border-stone-50/10 hover:border-amber-600/50 transition-all duration-300 cursor-pointer group"
            >
              {/* Recommended Badge */}
              {item.recommended && (
                <div className="absolute top-3 right-3 bg-amber-600 text-neutral-950 text-xs font-semibold px-3 py-1 rounded-full">
                  ⭐ Recommended
                </div>
              )}

              {/* Emoji Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>

              {/* Dish Name */}
              <h3 className="text-xl font-serif font-semibold text-stone-50 mb-2 line-clamp-2">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-stone-50/70 mb-4 text-sm line-clamp-2">
                {item.desc}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between">
                <p className="text-amber-600 text-2xl font-bold">{item.price}</p>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-600 text-sm font-semibold hover:underline">
                  Order Now →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-stone-50/50 text-sm"
        >
          <p>*Prices inclusive of taxes | 10% service charge applicable</p>
          <p className="mt-2">🍶 Pair your meal with our selection of sake and Japanese beverages</p>
        </motion.div>
      </div>
    </section>
  );
};


export default MenuSection;