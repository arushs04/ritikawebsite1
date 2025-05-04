'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

const events: TimelineEvent[] = [
  {
    date: '2025',
    title: 'Amazon Offer',
    description: 'You Received an offer from Amazon beboooo- A dream come true! Your dedication and hard work have finally paid off. This is just the beginning of an amazing journey.',
    icon: '🎯',
    imageUrl: '/IMG_6554.JPG',
  },
  {
    date: '2024',
    title: 'Graduated from college wohooo',
    description: 'Demonstrated exceptional skills in acing college also were so good even with worst luck in profs.',
    icon: '📈',
    imageUrl: '/IMG_5451 2.jpeg',
  },
  {
    date: '2022',
    title: 'Started Internship in brightspot',
    description: 'Built a strong foundation for your career..',
    icon: '💼',
    imageUrl: '/IMG_2408.jpeg',
  },
  // Add more events as needed
];

export default function Timeline() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const refs = [ref1, ref2, ref3];
  const inViews = [inView1, inView2, inView3];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Your Journey
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              ref={refs[index]}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inViews[index] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-20 ${
                index % 2 === 0 ? 'ml-auto' : 'mr-auto'
              } w-[calc(50%-2rem)]`}
            >
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{event.icon}</span>
                  <div>
                    <span className="text-sm font-semibold text-purple-600">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
              {/* Timeline dot */}
              <div className="absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg" 
                   style={{ 
                     left: index % 2 === 0 ? '-2rem' : 'auto',
                     right: index % 2 === 0 ? 'auto' : '-2rem'
                   }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 