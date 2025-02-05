"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Star, 
  Heart, 
  Users, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  Newspaper, 
  GraduationCap,
  CalendarDays,
  Camera
} from "lucide-react";
import Link from "next/link";
import Hero from "./components/Hero";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick Info Cards */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Nurturing Environment",
              description: "Creating a warm and supportive space for every child to thrive",
              color: "from-pink-500 to-rose-500"
            },
            {
              icon: Star,
              title: "Quality Education",
              description: "Delivering excellence in early childhood education",
              color: "from-purple-500 to-indigo-500"
            },
            {
              icon: Users,
              title: "Expert Teachers",
              description: "Dedicated educators shaping bright futures",
              color: "from-cyan-500 to-blue-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
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

      {/* Welcome Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-white/50 backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={item} className="space-y-6">
              <h2 className="text-4xl font-bold font-comic bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Welcome to Maleng Primary School
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Maleng Primary School, we believe in nurturing young minds through creative learning and play. Our dedicated team of educators is committed to providing a supportive environment where every child can discover their unique potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="relative h-[400px] bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl overflow-hidden"
            >
              {/* Animated School Elements */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {["📚", "✏️", "🎨", "🎵", "⭐", "🎯", "🌟", "🎪", "🎭", "🎨", "🎪", "📝"][i]}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Pages Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-white/50 backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={item}
            className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent"
          >
            Explore Our School
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Newspaper,
                title: "Latest News",
                description: "Stay updated with school events, achievements, and announcements",
                link: "/news",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Calendar,
                title: "School Meals",
                description: "View our nutritious weekly meal plans and schedules",
                link: "/meals",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: CalendarDays,
                title: "Events",
                description: "Check out our upcoming school events and activities",
                link: "/events",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Camera,
                title: "Gallery",
                description: "Browse through our collection of school memories",
                link: "/gallery",
                color: "from-yellow-500 to-amber-500"
              }
            ].map((page, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative"
              >
                <Link href={page.link}>
                  <div className="bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity"
                      style={{
                        background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      }}
                      initial={false}
                      animate={{
                        background: `linear-gradient(to bottom right, ${page.color})`,
                      }}
                    />
                    <motion.div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${page.color} p-3 mb-6`}
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <page.icon className="w-full h-full text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold font-comic mb-2 text-gray-800">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {page.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={item}
            className="text-4xl font-bold font-comic text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent"
          >
            Why Choose Maleng Primary?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Comprehensive Curriculum",
                description: "Balanced academic program focusing on core subjects and creative development",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Users,
                title: "Small Class Sizes",
                description: "Personalized attention ensuring every child receives the support they need",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Sparkles,
                title: "Enrichment Programs",
                description: "Extra-curricular activities fostering well-rounded development",
                color: "from-cyan-500 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-6`}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>
                <h3 className="text-xl font-bold font-comic mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
            Start Your Child's Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Join our vibrant learning community and watch your child flourish
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
    </main>
  );
}