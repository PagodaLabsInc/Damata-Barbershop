import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Clock, X } from 'lucide-react';
import { BookNow } from './BookNow';
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  isLogo?: boolean;
}
interface CategoryProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}
export function ServiceTabs() {
  const categories: CategoryProps[] = [{
    id: 'haircuts',
    label: 'Haircuts & Styles',
    icon: <Scissors size={20} />
  }, {
    id: 'additional',
    label: 'Additional Services',
    icon: <div size={20} />
  }];
  const allServices: Record<string, Service[]> = {
    haircuts: [{
      id: 'haircut',
      title: 'Haircut',
      description: 'Professional haircut with clippers and scissors, includes neck shave.',
      price: '$35',
      duration: '30 min',
      image: "/haircut.png"
    }, {
      id: 'haircut-beard',
      title: 'Haircut and Beard',
      description: 'Complete package with haircut and beard trimming and styling.',
      price: '$50',
      duration: '40 min',
      image: "/haircut__beard.png"
    }, {
      id: 'line-up',
      title: 'Line Up',
      description: 'Clean up your hairline and edges for a fresh look.',
      price: '$10',
      duration: '20 min',
      image: "/lineup.png",
      isLogo: false
    }, {
      id: 'relaxation',
      title: 'Relaxation of the Hair',
      description: 'Hair relaxing treatment for smoother, straighter hair.',
      price: '$80',
      duration: '30 min',
      image: "/relaxation_of_hair.png",
      isLogo: false
    }, {
      id: 'color-hair',
      title: 'Color Hair',
      description: 'Professional hair coloring service for a new look.',
      price: '$40',
      duration: '30 min',
      image: "/Damata_Circle.png",
      isLogo: true
    }],
    additional: [{
      id: 'shave',
      title: 'Shave',
      description: 'Clean, professional shave with hot towel treatment.',
      price: '$20',
      duration: '20 min',
      image: "/Shave.jpg"
    }, {
      id: 'wax-eyebrows',
      title: 'Wax Eyebrows',
      description: 'Eyebrow waxing for a clean, defined shape.',
      price: '$15',
      duration: '30 min',
      image: "/Damata_Circle.png",
      isLogo: true
    }, {
      id: 'eyebrow-razor',
      title: 'Eyebrow Razor',
      description: 'Precision eyebrow shaping using a razor technique.',
      price: '$7',
      duration: '30 min',
      image: "/Damata_Circle.png",
      isLogo: true
    }, {
      id: 'wax-nose',
      title: 'Wax Nose',
      description: 'Quick and painless nose hair removal using specialized wax.',
      price: '$10',
      duration: '30 min',
      image: "/Damata_Circle.png",
      isLogo: true
    }]
  };
  const [activeTab, setActiveTab] = useState('haircuts');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  return <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#231F20]">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional barbering services to keep you
            looking your best.
          </p>
          <div className="w-24 h-1 bg-[#FFD400] mx-auto mt-4"></div>
        </div>
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex rounded-md shadow-sm bg-white">
            {categories.map(category => <button key={category.id} onClick={() => setActiveTab(category.id)} className={`relative px-4 py-3 flex items-center transition-all duration-300 whitespace-nowrap ${activeTab === category.id ? 'text-white' : 'text-gray-600 hover:text-[#231F20]'}`}>
                {activeTab === category.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#231F20] rounded-md" initial={false} transition={{
              type: 'spring',
              duration: 0.5
            }} />}
                <span className="relative flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </span>
              </button>)}
          </div>
        </div>
        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices[activeTab].map(service => <motion.div key={service.id} whileHover={{
            scale: 1.03
          }} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-72 overflow-hidden relative">
                  {service.isLogo ? <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <img src="/Damata_Circle.png" alt={service.title} className="w-36 h-36 object-contain" onClick={() => {
                  setSelectedImage(service.image);
                  setSelectedTitle(service.title);
                }} />
                    </div> : <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center cursor-pointer" onClick={() => {
                setSelectedImage(service.image);
                setSelectedTitle(service.title);
              }} />}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-[#231F20]">
                      {service.title}
                    </h3>
                    <span className="text-lg font-semibold text-[#FFD400]">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="px-6 pb-4">
                  <BookNow className="block w-full bg-[#231F20] text-white text-center py-2 rounded-md hover:bg-[#000000] transition-colors duration-300" />
                </div>
              </motion.div>)}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Image Lightbox */}
      {selectedImage && <div className="fixed inset-0 bg-[#231F20] bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)} aria-label="Close image preview">
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <h3 className="text-white text-center text-xl mb-4">
              {selectedTitle}
            </h3>
            <img src={selectedImage} alt={selectedTitle || 'Haircut style'} className="max-w-full max-h-[80vh] object-contain mx-auto" onClick={e => e.stopPropagation()} />
          </div>
        </div>}
    </section>;
}