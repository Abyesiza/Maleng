"use client";

import { motion } from "framer-motion";
import { Image, Filter, Camera, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Photos", color: "from-purple-500 to-orange-500" },
    { id: "events", name: "Events", color: "from-blue-500 to-cyan-500" },
    { id: "activities", name: "Activities", color: "from-green-500 to-emerald-500" },
    { id: "facilities", name: "Facilities", color: "from-pink-500 to-rose-500" },
    { id: "sports", name: "Sports", color: "from-yellow-500 to-amber-500" }
  ];

  const gallery = [
    {
      id: 1,
      title: "Annual Sports Day",
      category: "events",
      imageUrl: "/images/sports-day.jpg",
      description: "Students participating in various sports activities"
    },
    {
      id: 2,
      title: "Art Class",
      category: "activities",
      imageUrl: "/images/art-class.jpg",
      description: "Creative expression in our art studio"
    },
    {
      id: 3,
      title: "Modern Library",
      category: "facilities",
      imageUrl: "/images/library.jpg",
      description: "Our well-equipped library facility"
    },
    {
      id: 4,
      title: "Science Fair",
      category: "events",
      imageUrl: "/images/science-fair.jpg",
      description: "Students showcasing their science projects"
    },
    {
      id: 5,
      title: "Football Match",
      category: "sports",
      imageUrl: "/images/football.jpg",
      description: "Inter-school football tournament"
    },
    {
      id: 6,
      title: "Computer Lab",
      category: "facilities",
      imageUrl: "/images/computer-lab.jpg",
      description: "State-of-the-art computer facilities"
    }
  ];

  const filteredGallery = selectedCategory === "all" 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

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
                Photo Gallery
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
                📸
              </motion.div>
            </motion.div>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 mb-8"
            >
              Capturing moments and memories at our school
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-8 container mx-auto px-4"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category.id
                ? "bg-gradient-to-r " + category.color + " text-white shadow-lg"
                : "bg-white text-gray-600 hover:shadow-md"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              variants={item}
              className="group"
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Camera className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-orange-100 text-purple-600">
                    <Tag className="w-3 h-3 mr-1" />
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </Badge>
                  <h3 className="text-xl font-bold font-comic mb-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
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
              {["📸", "🎨", "🎭", "🎪", "⭐"][i % 5]}
            </div>
          ))}
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-comic mb-6"
          >
            Want to See More?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Follow us on social media for daily updates and more photos
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Facebook
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 