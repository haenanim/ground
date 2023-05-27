import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scoped.scss';

interface CarouselProps {
  children: any;
}

export default function Carousel({ children }: CarouselProps) {
  const $carousel = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setParentWidth($carousel.current?.clientWidth || 0);
  }, [$carousel.current?.clientWidth]);

  useEffect(() => {
    $carousel.current?.scrollTo(parentWidth * (currentPage - 1), 0);
  }, [currentPage]);

  useEffect(() => {});

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
  const goTargetPage = (index: number) => {
    setCurrentPage(index + 1);
  };
  return (
    <div className="carousel">
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
      <div className="carousel-indicator">
        {children.map((e: any, i: any) => {
          return (
            <div
              className="carousel-indicator-btn"
              onClick={() => goTargetPage(i)}
            >
              {i + 1 === currentPage ? '◆' : '◇'}
            </div>
          );
        })}
      </div>
    </div>
  );
}

Carousel.defaultProps = {};
