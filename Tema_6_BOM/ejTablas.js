

//CREAR LA FUNCION

function generarTabla(){

let filas = Number(document.getElementById("numeroFilas").value);
let columnas = Number(document.getElementById("numeroColumnas").value);
let color = document.getElementById("color").value;

let tabla = "<table style='border-collapse:collapse'>";

for(let i=0; i<filas; i++){
    tabla += "<tr>"

    for(let j=0; j<columnas; j++){
      // tabla += "<td style='background-color:" + color + "; width:50px; height:50px'></td>";
        tabla += "<td style='width:50px; height:50px; border:1px solid " + color + "'></td>";
    }

    tabla += "</tr>";
}

 tabla += "</table>";


 //MOSTRAR EL RESULTADO
 document.getElementById("resultado").innerHTML=tabla;


}
