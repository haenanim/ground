import React from 'react';
import logo from './logo.svg';
import Carousel from './components/Carousel/Carousel';
import CarouselItem from './components/Carousel/CarouselItem';

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: 500,
        }}
      >
        <Carousel>
          <CarouselItem>
            <div
              style={{
                backgroundColor: 'red',
              }}
            >
              1
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                backgroundColor: 'blueㄴ',
              }}
            >
              2
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                backgroundColor: 'green',
              }}
            >
              3
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
