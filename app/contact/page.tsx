"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, School } from "lucide-react";
import { Card } from "@/components/ui/card";

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

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 712 345 678",
      color: "from-blue-500 to-cyan-500",
      emoji: "📞"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@malengschool.com",
      color: "from-green-500 to-emerald-500",
      emoji: "📧"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 School Lane, Nairobi",
      color: "from-purple-500 to-pink-500",
      emoji: "📍"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 8:00 AM - 4:00 PM",
      color: "from-orange-500 to-red-500",
      emoji: "⏰"
    }
  ];

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
            <motion.div variants={item} className="relative inline-block mb-6">
              <h1 className="text-5xl md:text-6xl font-bold font-comic bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Contact Us
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
                💌
              </motion.div>
            </motion.div>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 mb-8"
            >
              We'd love to hear from you! Get in touch with us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-br ${info.color} rounded-full opacity-10 blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} p-2.5 mb-4`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <info.icon className="w-full h-full text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.details}</p>
                  <motion.div
                    className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      y: [0, -5, 5, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {info.emoji}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10">
              <motion.h2
                variants={item}
                className="text-3xl font-bold font-comic text-center mb-8 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent"
              >
                Send us a Message
              </motion.h2>
              <motion.form variants={item} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <Card className="p-8 relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative z-10">
            <motion.h2
              variants={item}
              className="text-3xl font-bold font-comic text-center mb-8 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-3"
            >
              <School className="h-8 w-8" />
              Visit Our School
            </motion.h2>
            <motion.div
              variants={item}
              className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-100"
            >
              {/* Replace src with your actual Google Maps embed URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818188009549!2d36.8170146!3d-1.2830727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuMSJTIDM2wrA0OScwMS4zIkU!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
        </Card>
      </motion.section>
    </div>
  );
}