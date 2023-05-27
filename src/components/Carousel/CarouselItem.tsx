import React, { useEffect, useMemo } from 'react';
import './CarouselItem.scoped.scss';

export default function CarouselItem({ children, width }: any) {
  useEffect(() => {
    console.log(width);
  });
  const widthMemo = useMemo(() => width, [width]);
  return (
    <div
      className="carousel-item"
      style={{
        width: widthMemo,
      }}
    >
      {children}
    </div>
  );
}
