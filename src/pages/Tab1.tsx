import {
  IonCard,
  IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonViewDidEnter
} from '@ionic/react';
import { addCircleOutline, removeCircle, removeCircleOutline } from 'ionicons/icons';
import { useState } from 'react';
import { getData } from '../service';
import './Tab1.css';


const Tab1: React.FC = () => {

  useIonViewDidEnter(() => {
    getData().then((result: any) => {
      setJsonData(result);
    })
  });

  //var jsonData: any = {};
  var [jsonData, setJsonData] = useState<any>({});

  let arrayListRPGChars = [
    "galdrin", "drow", "sirena", "lauro", "mestre"
  ]

  const handleAction = (name: any, type: any, action: any) => {
    //type - luck bad luck counter
    //actoin add remove
    if (type === "luck") {
      action == "add" ? jsonData[name].counter++ : jsonData[name].counter--;
      action == "add" ? jsonData[name].luck++ : jsonData[name].luck--;
    } else if (type === "bad_luck") {
      action == "add" ? jsonData[name].counter++ : jsonData[name].counter--;
      action == "add" ? jsonData[name].bad_luck++ : jsonData[name].bad_luck--;
    } else {
      action == "add" ? jsonData[name].counter++ : jsonData[name].counter--;
    }
    saveData();
    window.location.reload();
  };

  const saveData = async () => {
    try {
      const response = await fetch("http://localhost:3001/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        console.log("JSON salvo no servidor!");
      } else {
        console.error("Erro ao salvar o JSON.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dados</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>

          <IonCardContent>
            <IonList>

              {arrayListRPGChars.map((name, index) => (
                <IonItem key={index} className="centered-item">

                  <span style={{ width: "60px" }}> <h3>{jsonData[name]?.counter}</h3> </span>

                  <IonThumbnail slot="start">
                    <img alt={name} src={`./public/${name}.png`} />
                  </IonThumbnail>

                  {/* <IonLabel >Galdrin</IonLabel> */}
                  <div className='control'>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <button className={`custom-button ${name === "galdrin" ? "custom-button-galdrin" : "custom-button-galdrin"}`} onClick={() => handleAction(name, "counter", "add")}>
                        <IonIcon icon={addCircleOutline} style={{ fontSize: "35px" }} />
                      </button>
                      <button className="custom-button custom-button-remove" onClick={() => handleAction(name, "counter", "remove")}>
                        <IonIcon icon={removeCircleOutline} style={{ fontSize: "35px" }} />
                      </button>

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>

                      <div className='flex'>

                        <button className="custom-button-dados d20" onClick={() => handleAction(name, "luck", "add")}>
                          <img alt="d20" src="./public/d20.png" />
                        </button>
                        <span onClick={() => handleAction(name, "luck", "remove")} style={{ display: "flex", alignItems: "center" }}><IonIcon icon={removeCircle} style={{ fontSize: "20px" }} /></span>

                      </div>


                      <div className='flex'>

                        <button className="custom-button-dados d1" onClick={() => handleAction(name, "bad_luck", "add")}>
                          <img alt="d1" src="./public/d1.png" />
                        </button>
                        <span onClick={() => handleAction(name, "bad_luck", "remove")} style={{ display: "flex", alignItems: "center" }}><IonIcon icon={removeCircle} style={{ fontSize: "20px" }} /></span>

                      </div>


                    </div>


                  </div>
                </IonItem>
              ))}


            </IonList>
          </IonCardContent>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
