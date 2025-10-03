import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Clock } from 'lucide-react';
export function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [redirecting, setRedirecting] = useState(false);
  useEffect(() => {
    // Set up countdown timer first
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        // When countdown reaches 1, prepare for redirect
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setRedirecting(true);
        }
        return prev - 1;
      });
    }, 1000);
    // Set up automatic redirect after 10 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 10000);
    // Clean up timers when component unmounts
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);
  return <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-xl mx-auto">
        <img src="/Damata_Circle.png" alt="Damata Barbershop Logo" className="h-28 mb-8 mx-auto" />
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#231F20] mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-center mb-2">
            <Clock size={20} className="text-[#FFD400] mr-2" />
            <p className="text-[#FFD400] font-medium">
              {redirecting ? 'Redirecting you now...' : `Redirecting to home page in ${countdown} seconds...`}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            You can also use the buttons below to navigate
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-[#FFD400] text-[#231F20] hover:bg-[#e6c000] py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300 text-lg">
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="bg-[#231F20] text-white hover:bg-[#000000] py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300 text-lg">
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </button>
        </div>
        <p className="mt-8 text-gray-500">
          If you need help, please call us at{' '}
          <a href="tel:8579913045" className="text-[#231F20] hover:underline">
            (857) 991-3045
          </a>
        </p>
      </div>
    </div>;
}