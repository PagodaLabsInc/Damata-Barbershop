import React from 'react';
import { BookNowWidget } from './BookNowWidget';
export function BookingWidget() {
  return <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003278]">
          Book Your Appointment
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Schedule your next haircut or beard trim with our easy online booking
          system.
        </p>
        <div className="flex justify-center">
          <BookNowWidget className="bg-[#003278] text-white hover:bg-[#002255] py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300 text-lg">
            Book Now
          </BookNowWidget>
        </div>
      </div>
    </section>;
}