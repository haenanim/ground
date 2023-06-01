import { useEffect, useState, useRef } from 'react';
import React from 'react';

const CustomAlertItem = ({ children }: any) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInterval(() => {
      elementRef.current?.remove();
    }, 2000);
  }, []);

  return <div ref={elementRef}>CustomAlertItem</div>;
};

export default CustomAlertItem;
