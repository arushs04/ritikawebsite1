'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: '/IMG_2476.jpeg',
    title: 'You beauty!',
    description: 'The beginning of our beautiful journey',
  },
  {
    id: 2,
    imageUrl: '/IMG_5526.jpeg',
    title: 'Special Moments',
    description: 'Every moment with you is precious',
  },
  {
    id: 3,
    imageUrl: '/IMG_2006.jpeg',
    title: 'Celebrations',
    description: 'Celebrating you every day!',
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Our Memories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden relative bg-gradient-to-br from-pink-200 to-purple-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={() => setImageError(prev => ({ ...prev, [item.imageUrl]: true }))}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl max-w-2xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4 relative bg-gradient-to-br from-pink-200 to-purple-200">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(prev => ({ ...prev, [selectedItem.imageUrl]: true }))}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-600">{selectedItem.description}</p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 