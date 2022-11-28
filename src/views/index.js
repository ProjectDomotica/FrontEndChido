import React, { useState } from 'react'
import './styles.css';
import { Box, Container } from '@mui/system';
import { Divider} from '@mui/material';
import { 
    Lock, Unlock, 
    LightOn, LightOff,
    Frio, Fresco, Agradable, Caliente,
    Seco, Humedo, Tsunami
  } from '../Assets/img';
const MainPage = ({props}) => {

    const light = [{borderColor: '#f6ef64'}, {borderColor: 'black'}]
    const door = [{borderColor: '#82ee46'}, {borderColor: '#ed3939'}]

    const TempColor = (Temperatura) => {
        if (Temperatura <= 15 ){
            return {borderColor: 'lightblue'}
        }else if (Temperatura > 15 & Temperatura <= 25){
            return {borderColor: 'lightyellow'}
        }else if (Temperatura > 25 & Temperatura < 30){
            return {borderColor: 'Orange'}
        }else{
            return {borderColor: 'red'}
        }
    }
    const TempImg = (Temperatura) => {
        if (Temperatura <= 15 ){
            return Frio
        }else if (Temperatura > 15 & Temperatura <= 25){
            return Fresco
        }else if (Temperatura > 25 & Temperatura < 30){
            return Agradable
        }else{
            return Caliente
        }
    }

    const HumColor = (Humedad) => {
        if (Humedad <= 30 ){
            return {borderColor: '#ece2c6'}
        }else if (Humedad > 30 & Humedad <= 60){
            return {borderColor: 'lightblue'}
        }else if (Humedad > 60){
            return {borderColor: '#425fc0'}
        }
    }
    const HumImg = (Humedad) => {
        if (Humedad <= 30 ){
            return Seco
        }else if (Humedad > 30 & Humedad <= 60){
            return Humedo
        }else if (Humedad > 60){
            return Tsunami
        }
    }

    const [statuslight, setLight] = useState(false)
  return (
    <>
      <Container className='header'>
        <Box className='neonText'>Dark Solutions</Box>
      </Container>
      <Container>
        {props.map(metric => {
        return(
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4} key={1}>
          <Box gridColumn="span 4" className='Noe'>
            <Box>{metric.Hora}</Box>
          </Box>
          <Box gridColumn="span 2" className='Noe' >
            <Box>Dioxido de carbono</Box>{/*Calidad de aire buena, regular, mala poner imagenes y colores del marco*/}
            <Divider/>
            <Box>{metric.Carbono}</Box>
          </Box>
          <Box gridColumn="span 2" className='Noe' style={HumColor(metric.Humedad)}>
            <Box>Humedad</Box>
            <img src={HumImg(metric.Humedad)} className='icons'/>
            <Box>{metric.Humedad}%</Box>
          </Box>
          <Box gridColumn="span 4" className='Noe' style={TempColor(metric.Temperatura)}>
            <Box>Temperatura</Box>
            <img src={TempImg(metric.Temperatura)} className='icons' />
            <Box>{metric.Temperatura}°C</Box>
          </Box>
          <Box gridColumn="span 2" className='Noe' style={metric.Luz ? light[0] : light[1]}>
            <Box>Luz</Box>
            <img src={metric.Luz ? LightOn : LightOff} className='icons'/>
            <Box>{metric.Luz  ? 'Encendida' : 'Apagada'}</Box>
          </Box>
          <Box gridColumn="span 2" className='Noe' style={metric.Puerta ? door[0] : door[1]}>
            <Box>Puerta</Box>
            <img src={metric.Puerta ? Unlock : Lock} className='icons'/>
            <Box>{metric.Puerta  ? 'Abierta' : 'Cerrada'}</Box>
          </Box>
        </Box>
        )})}
      </Container>
    </>
  )
}

export default MainPage