"use client";

import { motion } from "framer-motion";
import { Heart, Star, Sun, Award, Users, BookOpen, Sparkles, Target } from "lucide-react";

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

export default function About() {
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
                Our Story
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
                ⭐
              </motion.div>
            </motion.div>
            <motion.p
              variants={itemAnimation}
              className="text-xl text-gray-600 mb-8"
            >
              Building bright futures through love, learning, and laughter
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={itemAnimation}
            className="bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              <Target className="w-full h-full text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold font-comic mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide a nurturing environment where children can discover their potential through creative learning and play
            </p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-3 mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.2
              }}
            >
              <Sun className="w-full h-full text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold font-comic mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be a leading institution in early childhood education, fostering tomorrow's leaders through holistic development
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 bg-white/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Care",
                description: "Nurturing with love and attention",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Star,
                title: "Excellence",
                description: "Striving for the highest standards",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Users,
                title: "Community",
                description: "Growing together as a family",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: Sparkles,
                title: "Creativity",
                description: "Fostering imagination and innovation",
                color: "from-orange-500 to-amber-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="bg-white rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.color} p-3 mb-6`}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <value.icon className="w-full h-full text-white" />
                </motion.div>
                <h3 className="text-xl font-bold font-comic mb-2 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mt-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* History Timeline */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Our Journey
        </h2>
        <div className="space-y-8">
          {[
            { year: "2010", title: "Foundation", description: "Started with just 20 students" },
            { year: "2015", title: "Growth", description: "Expanded facilities and programs" },
            { year: "2020", title: "Innovation", description: "Introduced new learning methods" },
            { year: "2023", title: "Excellence", description: "Recognized as a leading institution" }
          ].map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="flex items-center gap-8"
            >
              <motion.div
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <motion.span
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {milestone.year}
                </motion.span>
              </motion.div>
              <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold font-comic mb-2 text-gray-800">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
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
              {["✏️", "📚", "🎨", "🎵", "⭐"][i % 5]}
            </div>
          ))}
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-comic mb-6"
          >
            Be Part of Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Join our community and help shape the future of education
          </motion.p>
          <motion.a
            href="/admissions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Start Your Journey
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}