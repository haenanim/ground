import { useRef } from 'react';
import './CustomButton.scoped.scss';

export default function CustomButton() {
  const $control: any = useRef();

  function activeBtn() {
    if ($control.current.classList.contains('active')) {
      $control.current.classList.remove('active');
    } else {
      $control.current.classList.add('active');
    }
  }
  return (
    <div>
      <div
        className="custom-btn-base"
        onClick={() => {
          activeBtn();
        }}
      >
        <div className="custom-btn-control" ref={$control}></div>
      </div>
    </div>
  );
}
