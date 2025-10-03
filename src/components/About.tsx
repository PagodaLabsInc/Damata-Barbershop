import React, { lazy } from 'react';
import { Scissors, Award, Clock } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C191A]">
            About Our Barbershop in Somerville, MA
          </h2>
          <div className="w-24 h-1 bg-[#FFD400] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-1 md:order-1">
            <img src="/1.png" alt="Damata Barbershop team standing in front of their shop" className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
          </div>
          <div className="order-2 md:order-2">
            <h3 className="text-2xl font-bold mb-6 text-[#1C191A]">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                At Damata Barbershop in Somerville, MA, we combine classic
                barbering traditions with modern style to deliver clean,
                confident looks for men, kids, and families. Whether you're
                stopping in for a fade, beard trim, or kids' haircut, our
                experienced barbers make sure you leave looking your best.
              </p>
              <p>
                We're known for our welcoming approach to kids' haircuts,
                creating an environment that makes the experience enjoyable and
                stress-free for children of all ages, including those with
                special needs. Our barbers provide gentle, personalized care
                while using top-quality, child-safe products and maintaining the
                highest hygiene standards. We believe a great haircut can boost
                confidence and self-esteem, which is why we take the time to
                tailor every cut to reflect each client's unique personality.
                With our dedication to comfort, precision, and customer
                satisfaction, Damata Barbershop has become Somerville's trusted
                destination for families seeking exceptional barbering.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#1C191A] flex items-center justify-center mb-4">
              <Scissors size={24} className="text-white" aria-hidden="true" />
            </div>
            <h4 className="font-bold mb-2 text-[#1C191A]">Expert Barbers</h4>
            <p className="text-sm text-gray-600">
              Skilled professionals with years of experience
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#FFD400] flex items-center justify-center mb-4">
              <Award size={24} className="text-[#1C191A]" aria-hidden="true" />
            </div>
            <h4 className="font-bold mb-2 text-[#1C191A]">Quality Service</h4>
            <p className="text-sm text-gray-600">
              Premium products and attention to detail
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#1C191A] flex items-center justify-center mb-4">
              <Clock size={24} className="text-white" aria-hidden="true" />
            </div>
            <h4 className="font-bold mb-2 text-[#1C191A]">Convenient Hours</h4>
            <p className="text-sm text-gray-600">
              Open 6 days a week for your convenience
            </p>
          </div>
        </div>
      </div>
    </section>;
}