import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scoped.scss';

export default function Carousel({ children }: any) {
  const $carousel = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setParentWidth($carousel.current?.clientWidth || 0);
  }, [$carousel.current?.clientWidth]);

  useEffect(() => {
    $carousel.current?.scrollTo(parentWidth * (currentPage - 1), 0);
  }, [currentPage]);

  const goNext = () => {
    console.log('go next');
    if (children.length <= currentPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }

    console.log(currentPage);
  };
  const goPrev = () => {
    console.log('go prev');
    if (1 >= currentPage) {
      setCurrentPage(children.length);
    } else {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  };
  return (
    <div className="carousel">
      {currentPage}
      <div className="carousel-wrapper" ref={$carousel}>
        <div className="carousel-track">
          {children.map((child: any) =>
            React.cloneElement(child, {
              width: parentWidth,
            })
          )}
        </div>
      </div>
      <div className="carousel-wrapper__left-btn" onClick={goPrev}>
        {'<'}
      </div>
      <div className="carousel-wrapper__right-btn" onClick={goNext}>
        {'>'}
      </div>
    </div>
  );
}
