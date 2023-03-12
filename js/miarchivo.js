let continuarSimulando = "";

alert("bienvenido al simulador del promedio final de primer año. Haz click en ACEPTAR para continuar :)");
let nombreAlumno = prompt("Ingresa tu nombre");

do {
    let promedioAlgebra = Number(prompt("Ingresa el promedio de álgebra"));
    let promedioAlgoritmo = Number(prompt("Ingresa el promedio de Algoritmos"));
    let promedioComunicacion = Number(prompt("Ingresa el promedio de Comunicación"));
    let promedioCalculo = Number(prompt("Ingresa el promedio de Cálculo Diferencial"));

    function calculoPromedioFinal(p1, p2, p3, p4) {
        let promedioFinal = (p1 + p2 + p3 + p4) / 4;

        if (promedioFinal >= 5) {

            alert("buen trabajo " + nombreAlumno + ", Tu promedio final es de " + promedioFinal + ". Has pasado de año!!");
            let continuar = prompt("¿deseas seguir simulando tus notas? (escribe SI para continuar y NO para omitir)").toUpperCase();
            continuarSimulando = continuar;

        } else if (promedioFinal < 5) {

            alert("uhh mal ahí " + nombreAlumno + ", tienes un " + promedioFinal + ", por lo que tendrás que repetir el año :(");
            let continuar = prompt("¿deseas seguir simulando tus notas? (escribe SI para continuar y NO para omitir)").toUpperCase();
            continuarSimulando = continuar;

        }
    }
    calculoPromedioFinal(promedioAlgebra, promedioAlgoritmo, promedioComunicacion, promedioCalculo);

} while (continuarSimulando == "SI");


