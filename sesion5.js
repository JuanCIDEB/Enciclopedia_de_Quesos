function mostrarAlerta() {
    alert("queso * queso * queso");
}

const texto = document.getElementsByTagName("li");
console.log(texto);
function clickname(){
    const infoCont = document.getElementsByClassName('dropdown-item');
    console.log(infoCont)
    console.log('queso')

    const querySelector = document.querySelector('p') //les trae el primero que encuentre  por ahorita, saca el primer texto
    console.log(querySelector)
}
// Hasta se podria hacer para cambiar la src de imagen,,,,,,,, muy interesante
// developer.mozilla.org  

var Arreglo = ["Qcambia1.jpg", "Qcambia2.jpg", "Qcambia3.jpg"]
var count = 1;
function imagechange(){
    if (count > 2){
        count = 0
    }   
    document.getElementById("imgabout").src = Arreglo[count]
    console.log(count)
    count ++





    

}
// for(let img in Arreglo){
//     document.getElementById("QCabra").src = img
// }
// ctrl + k + c