import { useState, useRef } from 'react';
import CustomAlertItem from './CustomAlertItem';
import './CustomAlert.scoped.scss';
interface props {
  children: any;
}
export default function CustomAlert({ children }: props) {
  const [alerts, setAlerts] = useState<any>([]);
  const $alertElement = useRef<HTMLDivElement>(null);
  const elementSet = [];

  function addAlert(content: any) {
    const index: any = alerts.length;
    const a = [...alerts, <CustomAlertItem content={content} />];
    elementSet.push($alertElement);
    setAlerts(a);
  }

  return (
    <div className="customAlert-row">
      {alerts}
      {/* <button
        onClick={() => {
          {
            addAlert('divelement');
            console.log(alerts);
          }
        }}
      >
        dasdf
      </button> */}
    </div>
  );
}

//  CustomAlert;
