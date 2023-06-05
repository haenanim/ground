import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scoped.scss';

interface CarouselProps {
  autoPlay?: number;
  children: any;
}

export default function Carousel({ children, autoPlay }: CarouselProps) {
  const $carousel = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  useEffect(() => {
    initCarousel();
    return () => {
      if (timeoutId) {
        clearInterval(timeoutId);
      }
    };
  }, []);

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
  };
  const goPrev = () => {
    console.log('go prev');
    if (1 >= currentPage) {
      setCurrentPage(children.length);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const goTargetPage = (index: number) => {
    setCurrentPage(index + 1);
  };
  const autoPlayCard = () => {
    const timerId = setInterval(goNext, 5000);
    setTimeoutId(timerId);
  };

  const initCarousel = () => {
    setParentWidth($carousel.current?.clientWidth || 0);
    if (autoPlay) {
      autoPlayCard();
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper" ref={$carousel}>
        <div className="carousel-track">
          {children.map((child: any, idx: number) => (
            <React.Fragment key={`carousel-children-${idx}`}>
              {React.cloneElement(child, {
                width: parentWidth,
              })}
            </React.Fragment>
          ))}
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
              key={`carousel-indicator-${i}`}
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
