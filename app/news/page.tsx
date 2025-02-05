"use client";

import { motion } from "framer-motion";
import { Calendar, Tag, ChevronRight, Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Outstanding Results in National Assessment",
      date: "2024-04-10",
      category: "Academic",
      excerpt: "Our students have achieved exceptional results in this year's national assessment, with 95% scoring above average.",
      content: "We are proud to announce that our students have performed exceptionally well..."
    },
    {
      id: 2,
      title: "New Library Resources Available",
      date: "2024-04-08",
      category: "Facility",
      excerpt: "The school library has been upgraded with new digital resources and books to enhance learning.",
      content: "We're excited to announce the addition of new resources to our library..."
    },
    {
      id: 3,
      title: "Successful Art Exhibition",
      date: "2024-04-05",
      category: "Events",
      excerpt: "Our students showcased their artistic talents at the annual art exhibition, impressing visitors with their creativity.",
      content: "The annual art exhibition was a great success..."
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "from-blue-500 to-cyan-500",
      Facility: "from-green-500 to-emerald-500",
      Events: "from-purple-500 to-pink-500"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const getCategoryBadgeColor = (category: string) => {
    const colors = {
      Academic: "bg-blue-100 text-blue-800",
      Facility: "bg-green-100 text-green-800",
      Events: "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

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
                School News
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
                📰
              </motion.div>
            </motion.div>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 mb-8"
            >
              Stay updated with the latest happenings at our school
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              variants={item}
              className="group"
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="p-6 relative">
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={`${getCategoryBadgeColor(item.category)} transform transition-transform group-hover:scale-105`}>
                      <Tag className="h-3 w-3 mr-1" />
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <motion.h2 
                    className="text-2xl font-bold font-comic mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent relative inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    {item.title}
                    <motion.div
                      className="absolute -right-4 -top-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -2, 2, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {["📚", "✏️", "🎨", "⭐"][index % 4]}
                    </motion.div>
                  </motion.h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">{item.excerpt}</p>
                  <motion.div
                    className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-all"
                    whileHover={{ x: 10 }}
                  >
                    <span className="relative">
                      Read More
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-purple-500 to-orange-500 text-white relative overflow-hidden"
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
              {["📰", "📚", "✏️", "🎨", "⭐"][i % 5]}
            </div>
          ))}
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-comic mb-6"
          >
            Never Miss an Update
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter for the latest news and events
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = "mailto:news@malengschool.com?subject=Newsletter Subscription"}
          >
            Subscribe Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}