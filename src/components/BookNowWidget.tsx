import React, { useEffect, useState, createElement } from 'react';
interface BookNowWidgetProps {
  className?: string;
  children?: React.ReactNode;
}
export function BookNowWidget({
  className,
  children = 'Book Now Widget'
}: BookNowWidgetProps) {
  const handleBookingClick = () => {
    // Open Booksy booking page in a new window/tab
    window.open('https://damatabarbershop.booksy.com', '_blank', 'noopener,noreferrer');
  };
  return <button className={className} onClick={handleBookingClick} type="button">
      {children}
    </button>;
}