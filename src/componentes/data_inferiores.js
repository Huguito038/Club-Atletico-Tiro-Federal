const rival = {
    equipo: "Estudiantes",
    img :"https://estudiantesdelaplata.com/wp-content/themes/edelp_v2/imgs/logo_edelp.svg",
}

const context = require.context("./FOTOS/Cuarta",false,/\.(png|jpg|jpeg|gif)$/)
const fotos = context.keys().map(context);

const context1 = require.context("./FOTOS/Quinta",false,/\.(png|jpg|jpeg|gif)$/)
const fotos1 = context1.keys().map(context1);
const context2 = require.context("./FOTOS/Sexta",false,/\.(png|jpg|jpeg|gif)$/)
const fotos2 = context2.keys().map(context2);
const context3 = require.context("./FOTOS/Septima",false,/\.(png|jpg|jpeg|gif)$/)
const fotos3 = context3.keys().map(context3);
const context4 = require.context("./FOTOS/Octava",false,/\.(png|jpg|jpeg|gif)$/)
const fotos4 = context4.keys().map(context4);
const context5 = require.context("./FOTOS/Novena",false,/\.(png|jpg|jpeg|gif)$/)
const fotos5 = context5.keys().map(context5);



const quinta = {
    titulo: "QUINTA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
    fotos:fotos1
  
}

const cuarta = {
    titulo: "CUARTA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
    fotos
    
}

const sexta = {
    titulo: "SEXTA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
    fotos:fotos2
}
const septima = {
    titulo: "SEPTIMA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
    fotos:fotos3
  
}

const octava = {
    titulo: "OCTAVA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
    fotos:fotos4
   
}

const novena = {
    titulo: "NOVENA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
    fotos:fotos5
  
}

export {cuarta,quinta,septima,sexta,octava,novena,rival}