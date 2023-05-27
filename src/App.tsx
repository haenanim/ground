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
        <Carousel autoPlay={5000}>
          <CarouselItem>
            <div
              style={{
                backgroundColor: 'red',
                height: '100%',
              }}
            >
              오해인 바보멍청이
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                backgroundColor: 'blue',
                height: '100%',
              }}
            >
              똥개 말미잘
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                backgroundColor: 'green',
                height: '100%',
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
