const rivalM = {
    equipo: "River Plate",
    img: "https://www.cariverplate.com.ar/images/logo-river.png?cache=a57",
}

const context = require.context("./FOTOS/Primera_Masculina",false,/\.(png|jpg|jpeg|gif)$/)
const fotos = context.keys().map(context);

const context2 = require.context("./FOTOS/Reserva_Masculina",false,/\.(png|jpg|jpeg|gif)$/)
const fotos2 = context2.keys().map(context2);

const context3 = require.context("./FOTOS/Reserva_Femenina",false,/\.(png|jpg|jpeg|gif)$/)
const fotos3 = context3.keys().map(context3);

const context0 = require.context("./FOTOS/Primera_Femenina",false,/\.(png|jpg|jpeg|gif)$/)
const fotos4 = context0.keys().map(context0);



const primeraM = {
    titulo: "PRIMERA MASCULINA",
    goles_favor : 6,
    goles_contra : 1,
    fotos
}

const reservaM = {
    titulo: "RESERVA MASCULINA",
    goles_favor : 2,
    goles_contra : 0,
    fotos:fotos2
   
}

const primeraF = {
    titulo: "PRIMERA FEMENINA",
    goles_favor : 8,
    goles_contra : 2,
    fotos:fotos4
    
}

const reservaF = {
    titulo: "RESERVA FEMENINA",
    goles_favor : 5,
    goles_contra : 4,
   fotos:fotos3
}


export {primeraM,reservaM,primeraF,reservaF,rivalM,fotos}