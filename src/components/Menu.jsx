import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('Mains');
  const tabs = ['Starters', 'Mains', 'Desserts', 'Drinks'];

  const menuItems = {
    Starters: [
      { name: 'Bruschetta Trio', desc: 'Tomato, mushroom, and olive tapenade', price: '$12', emoji: '🍞' },
      { name: 'Crispy Calamari', desc: 'Lemon aioli and marinara sauce', price: '$15', emoji: '🦑' },
      { name: 'Soup of the Day', desc: 'Chef\'s daily creation', price: '$8', emoji: '🥣' },
    ],
    Mains: [
      { name: 'Grilled Salmon', desc: 'Herb butter, seasonal vegetables', price: '$28', emoji: '🐟' },
      { name: 'Beef Tenderloin', desc: 'Red wine reduction, truffle mash', price: '$42', emoji: '🥩' },
      { name: 'Mushroom Risotto', desc: 'Parmesan, white truffle oil', price: '$24', emoji: '🍚' },
    ],
    Desserts: [
      { name: 'Tiramisu', desc: 'Classic Italian coffee-soaked layers', price: '$10', emoji: '🍰' },
      { name: 'Chocolate Lava Cake', desc: 'Vanilla bean ice cream', price: '$12', emoji: '🍫' },
      { name: 'Crème Brûlée', desc: 'Vanilla bean, caramelized sugar', price: '$11', emoji: '🍮' },
    ],
    Drinks: [
      { name: 'House Wine Selection', desc: 'Red, white, rosé', price: '$8', emoji: '🍷' },
      { name: 'Craft Cocktails', desc: 'Mixologist specials', price: '$14', emoji: '🍸' },
      { name: 'Artisan Coffee', desc: 'Espresso, cappuccino, latte', price: '$5', emoji: '☕' },
    ],
  };

  return (
    <section id="menu" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold text-warmWhite mb-4">Crafted with Love</h2>
          <p className="text-xl text-warmWhite/70 italic">"Good food doesn't just fill you — it fulfills you."</p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-2">
          {tabs.map((tab) => (
            <div key={tab} className="relative group">
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 transition-colors duration-300 ${
                  activeTab === tab ? 'text-mutedGold' : 'text-warmWhite'
                }`}
              >
                {tab}
              </button>
              {activeTab === tab ? (
                <motion.div
                  className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-mutedGold"
                  layoutId="underline"
                />
              ) : null}
              <div
                className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-warmWhite/50 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {menuItems[activeTab].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-warmWhite/5 backdrop-blur-sm p-6 rounded-xl border border-warmWhite/10 hover:border-mutedGold/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-2xl font-serif font-semibold text-warmWhite mb-2">{item.name}</h3>
              <p className="text-warmWhite/70 mb-4">{item.desc}</p>
              <p className="text-mutedGold text-xl font-semibold">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default MenuSection;