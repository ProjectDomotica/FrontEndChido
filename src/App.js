import React, {useState, useEffect} from 'react'
import './App.css';
import { Metrics } from './Assets/data';
import MainPage from './views';

/*
export const getdata = () => {
  fetch('http://localhost:4000/api/home', {
  credentials: 'omit'
})
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  })
}

getdata()
*/
  
function App() {  
  return (
    <>
      
      <MainPage/>
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
