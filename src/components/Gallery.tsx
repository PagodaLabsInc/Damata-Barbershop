import React, { useState, lazy } from 'react';
import { X } from 'lucide-react';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [{
    url: "/IMG_6260.jpg",
    alt: 'Barber at Damata Barbershop giving a client a precision haircut with clippers'
  }, {
    url: "/IMG_6232.jpg",
    alt: 'Barber at Damata Barbershop providing a haircut service with professional technique'
  }, {
    url: "/IMG_6243.jpg",
    alt: "Stylist at Damata Barbershop blow-drying a client's hair during a styling session"
  }, {
    url: "/IMG_6253.jpg",
    alt: 'Professional barber at Damata Barbershop creating a precise fade haircut'
  }, {
    url: "/hair__beard.png",
    alt: 'Client with a well-groomed beard and stylish haircut at Damata Barbershop'
  }, {
    url: "/Screen_Shot_2025-09-28_at_7.23.09_PM.png",
    alt: 'Professional fade haircut with clean lines at Damata Barbershop'
  }, {
    url: "/Screen_Shot_2025-09-28_at_7.23.28_PM.png",
    alt: 'Clean fade haircut with styled top at Damata Barbershop'
  }, {
    url: "/Screen_Shot_2025-09-28_at_7.23.18_PM.png",
    alt: 'Profile view of a precision haircut and beard trim at Damata Barbershop'
  }, {
    url: "/Screen_Shot_2025-09-28_at_7.23.23_PM.png",
    alt: 'Modern haircut with clean fade at Damata Barbershop'
  }];
  return <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#231F20]">
            Our Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent haircuts and styles at Damata
            Barbershop in Somerville, MA.
          </p>
          <div className="w-24 h-1 bg-[#FFD400] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:transform hover:scale-105" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>)}
        </div>
        {/* Lightbox */}
        {selectedImage && <div className="fixed inset-0 bg-[#231F20] bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)} aria-label="Close image preview">
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Enlarged haircut from Damata Barbershop" className="max-w-full max-h-[90vh] object-contain" />
          </div>}
      </div>
    </section>;
}