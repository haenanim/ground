import React, { useState, useRef } from 'react';
interface props {
  children: any;
}
export default function CustomAlert({ children }: props) {
  const [alerts, setAlerts] = useState<any>([]);
  const $alertElement = useRef<HTMLDivElement>(null);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  function addAlert(content: any) {
    const index: any = alerts.length;
    const a = [
      ...alerts,
      <div id={index} key={index} ref={$alertElement}>
        {content}
      </div>,
    ];
    setAlerts(a);
    settingInterval();
    // setAlerts([content, ...alerts]);
  }
  function deleteInterval() {
    $alertElement.current?.remove();
    clearInterval(timeoutId);
  }
  function settingInterval() {
    setTimeoutId(setInterval(deleteInterval, 2000));
  }
  return (
    <div>
      <div>{alerts}</div>
      <button
        onClick={() => {
          {
            addAlert('divelement');
            console.log(alerts);
          }
        }}
      ></button>
    </div>
  );
}

//  CustomAlert;
