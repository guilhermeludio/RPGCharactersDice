import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getData } from '../service';
import './Tab2.css';


const Tab2: React.FC = () => {

  ChartJS.register(ArcElement, Tooltip, Legend);

  useIonViewDidEnter(() => {
    getData().then((result: any) => {

      setCounterChart([]);
      setBadLuckChart([]);
      setLuckChart([]);
      for (const element in result) {
        setCounterChart(prev => [...prev, result[element].counter]);
        setBadLuckChart(prev => [...prev, result[element].bad_luck]);
        setLuckChart(prev => [...prev, result[element].luck]);
      }
    })
  });

  var [counterChart, setCounterChart] = useState<number[]>([]);

  var [badLuckChart, setBadLuckChart] = useState<number[]>([]);

  var [luckChart, setLuckChart] = useState<number[]>([]);

  var labels = ['Galdrin', 'Drow', 'Sirena', 'Lauro', 'Mestre'];

  var backgroundColor = [
    'rgba(11, 255, 235, 0.87)',
    'rgba(153, 102, 255, 0.2)',
    'rgb(30, 145, 19)',
    'rgb(117, 116, 110)',
    'rgba(255, 99, 133, 0.42)',
  ]

  var borderColor = [
    'rgba(54, 162, 235, 1)',
    'rgba(153, 102, 255, 1)',
    'rgb(47, 151, 81)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 99, 132, 1)',
  ]

  const dataD20 = {
    labels: labels,
    datasets: [
      {
        label: 'de APENAS D20',
        data: luckChart,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  const dataD1 = {
    labels: labels,
    datasets: [
      {
        label: 'de APENAS D1',
        data: badLuckChart,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  const dataCounter = {
    labels: labels,
    datasets: [
      {
        label: 'TODOS:',
        data: counterChart,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Estatísticas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ display: "flex", width: "100%" }}>

          <div style={{ width: "50%" }}>
            <Pie data={dataD20} />
          </div>

          <div style={{ width: "50%" }}>
            <Pie data={dataD1} />
          </div>
        </div>

        <Pie data={dataCounter} />;
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
