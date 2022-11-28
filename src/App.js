import './App.css';
import { Metrics } from './Assets/data';
import MainPage from './views';

function App() {
  return (
    <>
      <MainPage props={Metrics}/>
    </>
  );
}



/*
Datos a tomar: 
Temperatura
Humedad
Dioxido de carbono
Hora
Luz
Puerta
*/
export default App;
