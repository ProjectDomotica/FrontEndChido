import React, {useState, useEffect} from 'react'
import './styles.css';
import { Box, Container } from '@mui/system';
import { 
    LightOn, LightOff,
    Frio, Fresco, Agradable, Caliente,
    Seco, Humedo, Tsunami,
    Excelente, Buena, Mala, Letal
  } from '../Assets/img';
const MainPage = () => {

    const light = [{borderColor: '#f6ef64'}, {borderColor: 'black'}]

    const TempColor = (Temperatura) => {
        if (Temperatura <= 15 ){ return {borderColor: 'lightblue'} }
        else if (Temperatura > 15 && Temperatura <= 25){ return {borderColor: 'yellow'} }
        else if (Temperatura > 25 && Temperatura < 30){ return {borderColor: 'Orange'} }
        else{ return {borderColor: 'red'} }
    }
    const TempImg = (Temperatura) => {
        if (Temperatura <= 15 ){ return Frio }
        else if (Temperatura > 15 && Temperatura <= 25){ return Fresco }
        else if (Temperatura > 25 && Temperatura < 30){ return Agradable}
        else{ return Caliente }
    }

    const HumColor = (Humedad) => {
        if (Humedad <= 30 ){ return {borderColor: '#ece2c6'} }
        else if (Humedad > 30 && Humedad <= 60){ return {borderColor: 'lightblue'} }
        else if (Humedad > 60){ return {borderColor: '#425fc0'} }
    }
    const HumImg = (Humedad) => {
        if (Humedad <= 30 ){return Seco}
        else if (Humedad > 30 && Humedad <= 60){return Humedo}
        else if (Humedad > 60){return Tsunami}
    }

    const GasColor = (Gas) => {
      if(Gas <= 450){ return {borderColor: 'yellowgreen'} }
      else if(Gas > 450 & Gas <= 600){ return {borderColor: 'yellow'} }
      else if(Gas > 600 & Gas <= 1000){ return {borderColor: 'orange'} } 
      else if(Gas > 1000){ return {borderColor: '#ed3939'} } 
    }
    const GasImg = (Gas) => {
      if(Gas <= 450){ return Excelente }
      else if(Gas > 450 & Gas <= 600){ return Buena }
      else if(Gas > 600 & Gas <= 1000){ return Mala } 
      else if(Gas > 1000){ return Letal } 
    }
    const GasText = (Gas) => {
      if(Gas <= 450){ return 'Buena' }
      else if(Gas > 450 & Gas <= 600){ return 'Regular' }
      else if(Gas > 600 & Gas <= 1000){ return 'Mala' } 
      else if(Gas > 1000){ return 'Letal' } 
    }

    const [users, setUsers] = useState();

    // Function to collect data
    const getApiData = async () => {
      const response = await fetch(
        "http://localhost:4000/api/home", {
          credentials: 'omit'
        }
      ).then((response) => response.json());
  
      setUsers(response);
    };
  
    useEffect(() => {
      getApiData();
    }, []);

  return (
    <>
      <Container className='header'>
        <Box className='neonText'>Dark Solutions</Box>
      </Container>
      <Container>
        {users && users.map(metric => {
        return(
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4} key={1}>

          <Box gridColumn="span 4" className='Noe'>
            <Box>{metric.tiempo}</Box>
          </Box>

          <Box gridColumn="span 2" className='Noe' style={GasColor(metric.CO)}>
            <Box>Calidad de aire</Box>
            <img src={GasImg(metric.CO)} alt='Dioxido de carbono' className='icons'/>
            <Box>{GasText(metric.CO)}</Box>
          </Box>

          <Box gridColumn="span 2" className='Noe' style={HumColor(metric.Humedad)}>
            <Box>Humedad</Box>
            <img src={HumImg(metric.Humedad)} alt='Humedad' className='icons'/>
            <Box>{metric.Humedad}%</Box>
          </Box>

          <Box gridColumn="span 4" className='Noe' style={TempColor(metric.Temperatura)}>
            <Box>Temperatura</Box>
            <img src={TempImg(metric.Temperatura)} alt='Temperatura' className='icons' />
            <Box>{metric.Temperatura}°C</Box>
          </Box>

          <Box gridColumn="span 4" className='Noe' style={metric.Lumens  ? light[0] : light[1]}>
            <Box>Luz</Box>
            <img src={metric.Lumens ? LightOn : LightOff} alt='Luz' className='icons'/>
            <Box>{metric.Lumens ? 'Encendida' : 'Apagada'}</Box>
          </Box>

        </Box>
        )})}
      </Container>
    </>
  )
}

export default MainPage