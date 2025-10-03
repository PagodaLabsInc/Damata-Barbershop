import React, { useState, lazy } from 'react';
import { X } from 'lucide-react';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [{
    url: "/haircut_gal_2.jpg",
    alt: 'Stylish modern fade haircut with well-groomed beard at Damata Barbershop'
  }, {
    url: "/haircut_gallery.jpg",
    alt: 'Clean skin fade with textured top haircut by Damata Barbershop in Somerville'
  }, {
    url: "/beard.jpg",
    alt: 'Bald head with perfectly shaped and trimmed beard by Damata Barbershop barbers'
  }, {
    url: "/haircut2.jpg",
    alt: 'Professional taper fade haircut with clean neckline at Damata Barbershop'
  }, {
    url: '/kids_cut.jpg',
    alt: 'Barber giving a child a haircut in a fun red car chair at Damata Barbershop in Somerville'
  }, {
    url: '/kids_area.jpg',
    alt: 'Damata Barbershop barber sitting by the kids area with colorful floor mats and car-shaped chair'
  }, {
    url: "/fade.jpg",
    alt: 'Perfect fade haircut with clean line up and beard trim at Damata Barbershop Somerville'
  }, {
    url: "/haircut__beard.jpg",
    alt: 'Man with stylish haircut and well-groomed beard by Damata Barbershop in Somerville MA'
  }, {
    url: "/haircut.webp",
    alt: 'Sharp profile view of modern high fade haircut with textured top at Damata Barbershop'
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