import { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CarouselItem from './components/Carousel/CarouselItem';
import CustomAlert from './components/CustomAlert/CustomAlert';
import CustomButton from './components/CustomButton/CustomButton';
import CustomButtonProvider from './components/CustomButton/CustomButtonProvider';
import Modal from './components/Modal/Modal';

function App() {
  const [btnArray, setBtnArray] = useState([]);
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
      <CustomAlert>
        <div>asdf</div>
        <div>asdf</div>
      </CustomAlert>
      {btnArray}
      <CustomButtonProvider array={btnArray} setArray={setBtnArray}>
        <CustomButton>asdf</CustomButton>
        <CustomButton>dfefs</CustomButton>
      </CustomButtonProvider>
      <Modal>모달</Modal>
    </div>
  );
}

export default App;
