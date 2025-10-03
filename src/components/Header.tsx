import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BookNow } from './BookNow';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Add smooth scroll functionality
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        setIsMenuOpen(false);
      }
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C191A] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-1">
          <a href="#" className="text-white inline-block">
            <img src="/Damata_Circle.png" alt="Damata Barbershop Logo" className="h-24" />
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="mr-6">
            <ul className="flex space-x-8">
              {['About', 'Services', 'Gallery', 'Team', 'Testimonials', 'Contact'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white hover:text-[#FFD400] transition-colors duration-300" onClick={handleNavClick}>
                    {item}
                  </a>
                </li>)}
            </ul>
          </nav>
          <BookNow className="bg-[#FFD400] text-[#1C191A] hover:bg-[#e6c000] py-2 px-6 rounded-full font-semibold transition-colors duration-300" />
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-[#1C191A]">
          <ul className="flex flex-col items-center py-4">
            {['About', 'Services', 'Gallery', 'Team', 'Testimonials', 'Contact'].map(item => <li key={item} className="py-2">
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-[#FFD400] transition-colors duration-300" onClick={handleNavClick}>
                  {item}
                </a>
              </li>)}
            <li className="py-4">
              <BookNow className="bg-[#FFD400] text-[#1C191A] hover:bg-[#e6c000] py-2 px-6 rounded-full font-semibold transition-colors duration-300" />
            </li>
          </ul>
        </div>}
    </header>;
}