import { useEffect, useState, useRef } from 'react';
import React from 'react';
import './CustomAlertItem.scoped.scss';

interface props {
  content: string;
}

const CustomAlertItem = ({ content }: props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInterval(() => {
      elementRef.current?.remove();
    }, 2000);
  }, []);

  return (
    <div className="alert-item" ref={elementRef}>
      {content}
    </div>
  );
};

export default CustomAlertItem;
