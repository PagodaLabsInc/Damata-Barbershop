import React from 'react';
interface ServiceProps {
  title: string;
  description: string;
  price: string;
  image: string;
}
function ServiceCard({
  title,
  description,
  price,
  image
}: ServiceProps) {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-lg font-semibold">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>;
}
export function Services() {
  const services = [{
    title: 'Classic Haircut',
    description: 'Traditional haircut with clippers and scissors, includes a hot towel and neck shave.',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    title: 'Fade',
    description: 'Precision fade haircut with your choice of style on top, includes a hot towel and neck shave.',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Beard Trim',
    description: 'Precise beard shaping and trimming to keep your facial hair looking its best.',
    price: '$15',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towels and premium shaving products.',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: "Kid's Haircut",
    description: 'Haircut for children under 12 years old, includes a lollipop.',
    price: '$20',
    image: 'https://images.unsplash.com/photo-1483576884361-2ec3ef0f2efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: "Senior's Haircut",
    description: 'Haircut for seniors 65 and older, includes a hot towel and neck shave.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1519345274080-c89e7a8e8b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  return <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional barbering services to keep you
            looking your best.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} {...service} />)}
        </div>
      </div>
    </section>;
}