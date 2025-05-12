"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    date: "May 4, 2025",
    title: "Top 10 Cheapest Unis in Australia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam tincidunt.",
    image: "/artical.png", // Replace with actual image path
  },
  {
    date: "May 4, 2025",
    title: "How to Transfer from Diploma to Bachelor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam tincidunt.",
    image:"/artical1.png", // Replace with actual image path
  },
  {
    date: "May 4, 2025",
    title: "Does Transferring Affect Your Visa?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam tincidunt.",
    image: "/artical2.png", // Replace with actual image path
  },
];

export default function RecentArticles() {
  return (
    <section className="py-12 px-4 md:px-20 bg-white flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-semibold text-center mb-10 text-[#2C5680]"
      >
        Recent <span className="text-orange-500 font-bold">Articles</span>
      </motion.h2>
      <div className="w-full max-w-6xl grid md:grid-cols-3 gap-10 justify-items-center">
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: idx * 0.1 
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all bg-[#F6F6F7]"
          >
            <div className="h-52 w-full relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-500 mb-1">{article.date}</p>
              <h3 className="text-4xl font-bold text-[#2C5680] leading-snug">
                {article.title}
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                {article.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
