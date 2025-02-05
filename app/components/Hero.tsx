'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotatingAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50 to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-purple-200/40 to-purple-300/40 rounded-blob"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-orange-200/40 to-orange-300/40 rounded-blob"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-20 h-20 bg-gradient-to-br from-cyan-200/40 to-cyan-300/40 rounded-blob"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
        />

        {/* Rotating Decorative Elements */}
        <motion.div
          className="absolute top-[15%] left-[20%] text-6xl"
          variants={rotatingAnimation}
          initial="initial"
          animate="animate"
        >
          ✏️
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[15%] text-6xl"
          variants={rotatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "3s" }}
        >
          📚
        </motion.div>
        <motion.div
          className="absolute top-[25%] right-[25%] text-6xl"
          variants={rotatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          🎨
        </motion.div>

        {/* Animated Circles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                background: `linear-gradient(to right, ${['#FF8A80', '#B388FF', '#82B1FF', '#FFD180', '#CCFF90'][i]}, ${['#FF5252', '#7C4DFF', '#448AFF', '#FFB300', '#B2FF59'][i]})`,
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40">
        <div className="text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="space-y-6 mb-8"
          >
            <div className="relative inline-block">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold font-comic bg-gradient-to-r from-orange-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight"
                animate={{
                  scale: [1, 1.02, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                Welcome to Maleng Primary School
              </motion.h1>
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
                ⭐
              </motion.div>
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Where every child's potential is nurtured and dreams take flight
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/admissions"
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">Start Your Journey</span>
              <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-purple-600 font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-purple-200 overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-purple-50"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">Learn More</span>
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "25+", label: "Years of Excellence", emoji: "🌟" },
            { number: "500+", label: "Happy Students", emoji: "👨‍🎓" },
            { number: "50+", label: "Expert Teachers", emoji: "👩‍🏫" },
            { number: "100%", label: "Success Rate", emoji: "🎯" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="text-4xl mb-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {stat.emoji}
              </motion.div>
              <div className="text-2xl font-bold font-comic text-gray-800">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-orange-500">
        <motion.div
          className="absolute inset-0 bg-white"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
} 