'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl mb-4"
          >
            💖
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Forever Proud of You
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            This website is a small token of my love and appreciation for all that you are and all that you&apos;ve achieved.
            Your success is my success, and I&apos;m so excited to be part of your journey.
          </p>
          <div className="flex justify-center space-x-4">
            {['💖', '🌟', '🎯', '💪', '🚀'].map((emoji, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-2xl"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 