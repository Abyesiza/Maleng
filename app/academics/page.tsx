"use client";

import { motion } from "framer-motion";
import { BookOpen, Palette, Music, Trophy, Brain, Microscope, Calculator, Globe, Clock, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

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

export default function Academics() {
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
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-comic mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Academic Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our curriculum is designed to inspire curiosity, creativity, and a lifelong love for learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, label: "Student-Teacher Ratio", value: "12:1" },
            { icon: Clock, label: "Learning Hours/Week", value: "30" },
            { icon: Trophy, label: "Success Rate", value: "100%" },
            { icon: Globe, label: "Languages Taught", value: "3+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="relative bg-white rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <motion.div
                className="text-4xl mb-4 text-purple-500"
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
                <stat.icon className="w-12 h-12" />
              </motion.div>
              <h3 className="text-2xl font-bold font-comic text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Core Subjects */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 bg-white/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Core Subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Language Arts",
                description: "Reading, writing, and communication skills",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Calculator,
                title: "Mathematics",
                description: "Numbers, patterns, and problem-solving",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Microscope,
                title: "Science",
                description: "Exploration and discovery of the world",
                color: "from-cyan-500 to-blue-500"
              }
            ].map((subject, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="relative bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
                />
                <motion.div
                  className="text-4xl mb-6"
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
                  <subject.icon className={`w-16 h-16 bg-gradient-to-r ${subject.color} p-3 rounded-lg text-white`} />
                </motion.div>
                <h3 className="text-2xl font-bold font-comic mb-4 text-gray-800">
                  {subject.title}
                </h3>
                <p className="text-gray-600">{subject.description}</p>
                <ul className="mt-4 space-y-2">
                  {[1, 2, 3].map((_, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.span
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 mr-2"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                      Key Learning Point {i + 1}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Special Programs */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Special Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Palette,
              title: "Art & Design",
              time: "Mon & Wed",
              color: "from-pink-500 to-rose-500"
            },
            {
              icon: Music,
              title: "Music Program",
              time: "Tue & Thu",
              color: "from-purple-500 to-indigo-500"
            },
            {
              icon: Trophy,
              title: "Sports",
              time: "Wed & Fri",
              color: "from-cyan-500 to-blue-500"
            },
            {
              icon: Globe,
              title: "Languages",
              time: "Mon & Fri",
              color: "from-orange-500 to-amber-500"
            }
          ].map((program, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-white rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-lg bg-gradient-to-r ${program.color} p-3 mb-6`}
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                <program.icon className="w-full h-full text-white" />
              </motion.div>
              <h3 className="text-xl font-bold font-comic mb-2 text-gray-800">
                {program.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                {program.time}
              </div>
              <motion.div
                className="w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
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
            Ready to Join Our School?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Start your child's educational journey with us today
          </motion.p>
          <motion.a
            href="/admissions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Enroll Now
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
} 