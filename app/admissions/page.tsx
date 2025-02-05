"use client";

import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  Calendar, 
  FileText, 
  Users, 
  GraduationCap,
  Sparkles,
  CheckCircle,
  School,
  BookOpen,
  Heart
} from "lucide-react";
import Link from "next/link";

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

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
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
                Join Our School Family
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
                🌟
              </motion.div>
            </motion.div>
            <motion.p
              variants={itemAnimation}
              className="text-xl text-gray-600 mb-8"
            >
              Start your child's educational journey in a nurturing and creative environment
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Nurturing Environment",
              description: "A warm and caring atmosphere where every child feels valued",
              color: "from-pink-500 to-rose-500"
            },
            {
              icon: GraduationCap,
              title: "Quality Education",
              description: "Comprehensive curriculum focused on holistic development",
              color: "from-purple-500 to-indigo-500"
            },
            {
              icon: Users,
              title: "Expert Teachers",
              description: "Dedicated educators with years of experience",
              color: "from-cyan-500 to-blue-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="relative bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
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
                <feature.icon className={`w-16 h-16 bg-gradient-to-r ${feature.color} p-3 rounded-lg text-white`} />
              </motion.div>
              <h3 className="text-2xl font-bold font-comic mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Admission Process */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 bg-white/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                icon: ClipboardCheck,
                title: "Application",
                description: "Fill out the online application form",
                color: "from-pink-500 to-rose-500"
              },
              {
                step: 2,
                icon: Calendar,
                title: "Schedule Visit",
                description: "Book a campus tour and meeting",
                color: "from-purple-500 to-indigo-500"
              },
              {
                step: 3,
                icon: FileText,
                title: "Documentation",
                description: "Submit required documents",
                color: "from-cyan-500 to-blue-500"
              },
              {
                step: 4,
                icon: School,
                title: "Enrollment",
                description: "Complete enrollment process",
                color: "from-orange-500 to-amber-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="relative bg-white rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <motion.div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.color} p-3 mb-6 mt-4`}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <step.icon className="w-full h-full text-white" />
                </motion.div>
                <h3 className="text-xl font-bold font-comic mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
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

      {/* Requirements */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Requirements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={itemAnimation}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold font-comic mb-6 text-gray-800">Required Documents</h3>
            <ul className="space-y-4">
              {[
                "Birth Certificate",
                "Immunization Records",
                "Previous School Records (if any)",
                "Medical Information Form",
                "Parent/Guardian ID"
              ].map((doc, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </motion.div>
                  <span>{doc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={itemAnimation}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold font-comic mb-6 text-gray-800">Age Requirements</h3>
            <div className="space-y-6">
              {[
                { grade: "Nursery", age: "3-4 years", icon: "👶" },
                { grade: "Pre-K", age: "4-5 years", icon: "🧒" },
                { grade: "Kindergarten", age: "5-6 years", icon: "🎓" }
              ].map((level, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {level.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-800">{level.grade}</h4>
                    <p className="text-gray-600">{level.age}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            Ready to Begin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Take the first step towards your child's bright future
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = "mailto:admissions@malengschool.com"}
          >
            Contact Admissions
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
} 