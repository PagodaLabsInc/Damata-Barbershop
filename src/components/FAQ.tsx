import React, { useState, Fragment } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}
function FAQItem({
  question,
  answer,
  isOpen,
  toggle
}: FAQItemProps) {
  return <div className="border-b border-gray-200 py-4">
      <button className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none" onClick={toggle}>
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-4">{answer}</p>
      </div>
    </div>;
}
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqItems = [{
    question: 'Why Choose Damata Barbershop in Somerville?',
    answer: "✂️ Expert Cuts for All Ages – From sharp men's haircuts to patient, gentle kids' cuts, we make every client feel comfortable.\n\n🪒 Beard Shaping & Hot Towel Shaves – Precision grooming that keeps you looking sharp and polished.\n\n📍 Convenient Somerville Location – Easily accessible for residents of Somerville, Cambridge, and the Greater Boston area.\n\n⭐ Friendly, Professional Service – Our barbershop is known for its welcoming atmosphere and personalized care.",
    category: 'General'
  }, {
    question: 'Do I need to make an appointment?',
    answer: 'While we do accept walk-ins, we recommend making an appointment to ensure you get your preferred time slot and barber. You can book online or call us directly.',
    category: 'General'
  }, {
    question: 'What forms of payment do you accept?',
    answer: 'We accept cash, all major credit cards, Apple Pay, and Google Pay.',
    category: 'General'
  }, {
    question: 'What if I need to cancel my appointment?',
    answer: 'We understand that plans change. We appreciate at least 24 hours notice for cancellations. For last-minute cancellations, please call us as soon as possible.',
    category: 'General'
  }, {
    question: "Do you cut women's hair?",
    answer: "Yes, we specialize in short haircuts for all genders. If you're looking for a pixie cut, undercut, or any short style, we've got you covered.",
    category: 'General'
  }, {
    question: 'Do you offer grooming services in addition to haircuts?',
    answer: 'Yes. Our services include beard trims, hot towel shaves, and other grooming treatments for a polished, well-groomed appearance. We use only high-quality products to keep your beard healthy, shiny, and well-groomed, and our barbers will provide personalized tips on caring for your beard so you can keep it looking great between visits.',
    category: 'General'
  }, {
    question: 'Do you offer haircuts for kids?',
    answer: "Yes! At Damata Barbershop, we understand that a kid's haircut can feel daunting. We've created a welcoming atmosphere that caters to children's unique needs. Our barbers are trained to tailor each haircut—whether it's a buzz cut, fade, or trendy style inspired by their favorite athlete or celebrity. Our priority is your child's safety and comfort. We go above and beyond to ensure their visit is pleasant and confidence-boosting, giving each child a personalized experience that reflects their personality.",
    category: 'General'
  }];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#231F20]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers to some of our most commonly asked
            questions.
          </p>
          <div className="w-24 h-1 bg-[#FFD400] mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => <FAQItem key={index} question={item.question} answer={item.answer} isOpen={openIndex === index} toggle={() => toggleFAQ(index)} />)}
        </div>
      </div>
    </section>;
}