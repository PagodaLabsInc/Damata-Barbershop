import React, { useEffect, useRef } from 'react';
interface BookNowProps {
  className?: string;
  children?: React.ReactNode;
}
export function BookNow({
  className,
  children = 'Book Now'
}: BookNowProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const handleBookingClick = () => {
    // Open Booksy booking page in a new window/tab
    window.open('https://damatabarbershop.booksy.com', '_blank', 'noopener,noreferrer');
  };
  return <button className={className} onClick={handleBookingClick} type="button">
      {children}
    </button>;
}