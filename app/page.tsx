'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Congratulations!
            </h1>
            <div className="text-2xl md:text-4xl mb-8">
              <ReactTyped
                strings={[
                  'You got the Amazon offer! 🎉',
                  'I&apos;m so proud of you! 💖',
                  'Your hard work paid off! 🌟',
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore Your Journey
            </motion.button>
          </motion.div>

          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-pink-300/30"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Your Amazing Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Amazon Offer',
                  description: 'Your dream job at one of the world&apos;s most innovative companies',
                  icon: '🎯',
                },
                {
                  title: 'Hard Work',
                  description: 'Countless hours of dedication and perseverance',
                  icon: '💪',
                },
                {
                  title: 'Future Success',
                  description: 'This is just the beginning of your amazing career',
                  icon: '🚀',
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section id="timeline">
          <Timeline />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Special Message Section */}
        <section id="message" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              A Special Message
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I know I missed a really important moment, and I've been kicking myself for it because it wasn't just any moment. It was your moment. The one you've worked so hard for, dreamed about, and absolutely earned.

I want to take a second to say just how proud I am of you.

I remember all the times you'd say, 'One day, I just want to work at a big company.' It wasn't just talk. You were putting in the work. Late nights, constant studying, pushing yourself even when you were nervous or unsure. You didn't just wish for it you built the road to get there.

And then, when the offer finally came and you were standing in a changing room in Marshalls, of all places life just decided that was the perfect way to surprise you. That moment, even though I missed it live, is now etched in my heart. I can only imagine the shock, the disbelief, the joy. And honestly, knowing how much this means to you. I couldn't be happier for you.

Bebo, you've never needed validation from any job or title, but this? This is huge. Amazon, software development, New York this is a leap, and you're taking it.

What amazes me most isn't just that you got the offer. It's how you're stepping way out of your comfort zone. I know you you love the calm of the suburbs, the quiet, the peace. And yet, here you are ready to move to a giant, loud, unpredictable city, just to chase something bigger. That takes guts. That takes vision. That takes you.

In the four years we've been together, I've seen you grow into someone even stronger, more driven, and more inspiring. You light up when you talk about your dreams, and now you're turning those dreams into reality.

So today, I just want to say  I'm proud of you, I admire you, and I love you.

This chapter you're starting? It's just the beginning. And I'll be here, cheering you on, every step of the way.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                I promise to always be there to support you, celebrate your victories, and help you 
                through any challenges. You deserve all the success that&apos;s coming your way! 💖
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
