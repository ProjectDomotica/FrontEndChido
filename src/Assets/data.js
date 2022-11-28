
const RandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const showTime = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    let ampm = hours < 12 ? 'AM' : 'PM'
    console.log(`${hours}:${minutes}:${seconds} ${ampm}`)
    return `${hours}:${minutes} ${ampm}`;
    }

let varTemperatura = RandomNumber(40, 0)
let varHumedad = RandomNumber(100, 0)
let varCarbono = RandomNumber(2000, 0)
let varHora = showTime()
let varLuz = RandomNumber(1, 0)
let varPuerta = RandomNumber(1, 0)



export const Metrics = [{
        Temperatura: varTemperatura, 
        Humedad: varHumedad,
        Carbono: varCarbono,
        Hora: varHora,
        Luz: varLuz,
        Puerta: varPuerta
    }]

