"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, UtensilsCrossed, Clock, Apple, Coffee, Carrot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function MealsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const weeklyMenu = {
    Monday: {
      breakfast: "Whole Grain Cereal with Fresh Fruits",
      lunch: "Grilled Chicken with Vegetables",
      snack: "Yogurt with Granola"
    },
    Tuesday: {
      breakfast: "Oatmeal with Berries",
      lunch: "Fish Fingers with Sweet Potato Mash",
      snack: "Fresh Fruit Platter"
    },
    Wednesday: {
      breakfast: "Scrambled Eggs on Toast",
      lunch: "Vegetable Pasta with Tomato Sauce",
      snack: "Cheese and Crackers"
    },
    Thursday: {
      breakfast: "Pancakes with Maple Syrup",
      lunch: "Turkey and Cheese Sandwiches",
      snack: "Carrot Sticks with Hummus"
    },
    Friday: {
      breakfast: "Fruit Smoothie Bowl",
      lunch: "Rice and Bean Burrito Bowl",
      snack: "Banana Bread"
    }
  };

  // Get the day name and ensure it matches our menu keys
  const getDayMenu = (date: Date | undefined) => {
    if (!date) return weeklyMenu.Monday;
    
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    // Handle weekend case
    if (day === 'Saturday' || day === 'Sunday') {
      return {
        breakfast: "No school meals on weekends",
        lunch: "No school meals on weekends",
        snack: "No school meals on weekends"
      };
    }
    return weeklyMenu[day as keyof typeof weeklyMenu];
  };

  const currentDay = date?.toLocaleDateString('en-US', { weekday: 'long' }) || 'Monday';
  const todayMenu = getDayMenu(date);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `linear-gradient(to right, ${['#FF8A80', '#B388FF', '#82B1FF', '#FFD180', '#CCFF90'][i % 5]}, ${['#FF5252', '#7C4DFF', '#448AFF', '#FFB300', '#B2FF59'][i % 5]})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={itemAnimation} className="relative inline-block mb-6">
              <h1 className="text-5xl md:text-6xl font-bold font-comic bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                School Meals
              </h1>
              <motion.div
                className="absolute -right-8 -top-8 text-4xl"
                animate={{
                  rotate: [0, 20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🍽️
              </motion.div>
            </motion.div>
            <motion.p
              variants={itemAnimation}
              className="text-xl text-gray-600 mb-8"
            >
              Nutritious and delicious meals for growing minds
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={itemAnimation}>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                <CalendarIcon className="h-5 w-5 text-purple-500" />
                Select Date
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </Card>
          </motion.div>

          <motion.div variants={itemAnimation} className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                <UtensilsCrossed className="h-5 w-5 text-purple-500" />
                Menu for {currentDay}
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Coffee className="h-5 w-5 text-orange-500" />
                    <h3 className="font-semibold text-orange-700">Breakfast</h3>
                  </div>
                  <p className="text-orange-600">{todayMenu.breakfast}</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <UtensilsCrossed className="h-5 w-5 text-purple-500" />
                    <h3 className="font-semibold text-purple-700">Lunch</h3>
                  </div>
                  <p className="text-purple-600">{todayMenu.lunch}</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Apple className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold text-green-700">Snack</h3>
                  </div>
                  <p className="text-green-600">{todayMenu.snack}</p>
                </motion.div>
              </div>

              <motion.div
                variants={itemAnimation}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
              >
                <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Carrot className="h-5 w-5 text-blue-500" />
                  Dietary Information
                </h3>
                <ul className="text-blue-600 space-y-2">
                  {[
                    "All meals are nut-free",
                    "Vegetarian options available daily",
                    "Fresh fruits and vegetables served with every meal",
                    "Special dietary requirements accommodated upon request"
                  ].map((info, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.span
                        className="w-2 h-2 rounded-full bg-blue-500"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      {info}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-purple-500 to-orange-500 text-white relative overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-10"
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {["🍎", "🥕", "🥗", "🍌", "🥪"][i % 5]}
            </div>
          ))}
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-comic mb-6"
          >
            Have Special Dietary Requirements?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            We accommodate all dietary needs. Contact our nutrition team to discuss your requirements.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = "mailto:meals@malengschool.com?subject=Dietary Requirements"}
          >
            Contact Nutrition Team
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}