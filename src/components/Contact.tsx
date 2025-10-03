import React, { lazy } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { BookNow } from './BookNow';
export function Contact() {
  return <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C191A]">
            Contact Damata Barbershop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our shop in Somerville, MA or get in touch to book your
            appointment.
          </p>
          <div className="w-24 h-1 bg-[#FFD400] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1C191A]">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1C191A] rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#1C191A]">Location</h4>
                    <address className="text-gray-600 not-italic">
                      244 Broadway, Somerville, MA 02145
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FFD400] rounded-full p-3 mr-4">
                    <Phone size={20} className="text-[#1C191A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#1C191A]">Phone</h4>
                    <p className="text-gray-600">(857) 991-3045</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FFD400] rounded-full p-3 mr-4">
                    <Clock size={20} className="text-[#1C191A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#1C191A]">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9am - 8pm</p>
                    <p className="text-gray-600">Saturday: 9am - 8pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-[#1C191A]">Quick Contact</h4>
                <div className="flex space-x-4">
                  <a href="tel:8579913045" className="bg-[#1C191A] text-white hover:bg-[#000000] py-3 px-6 rounded-full font-semibold inline-block transition-colors duration-300" aria-label="Call Damata Barbershop now">
                    Call Now
                  </a>
                  <BookNow className="bg-[#FFD400] text-[#1C191A] hover:bg-[#e6c000] py-3 px-6 rounded-full font-semibold inline-block transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5893.525729622984!2d-71.0898682!3d42.3901979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370da66435493%3A0xd3594bd3f80d875d!2sDAMATA%20Barber%20shop!5e0!3m2!1sen!2sus!4v1759100893892!5m2!1sen!2sus" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Damata Barbershop location map" aria-label="Google Maps showing Damata Barbershop location at 244 Broadway, Somerville, MA"></iframe>
          </div>
        </div>
      </div>
    </section>;
}