import React from 'react';
import { BookNow } from './BookNow';
export function Hero() {
  return <section id="home" className="relative h-screen w-full bg-[#000000]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
    }} aria-hidden="true"></div>
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Damata Barbershop | Professional Barbers in Somerville, MA
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-shadow-md">
            Clean Cuts, Friendly Service, Right Here in Somerville.
          </p>
          <div className="flex justify-center">
            <BookNow className="bg-[#FFD400] text-[#1C191A] hover:bg-[#e6c000] py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300 text-lg" />
          </div>
        </div>
      </div>
    </section>;
}