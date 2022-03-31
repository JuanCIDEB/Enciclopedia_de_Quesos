var Arreglo = ["Qcambia1.jpg", "Qcambia2.jpg", "Qcambia3.jpg"]
var count = 1;
function imagechange(){
    if (count > 2){
        count = 0;
    }   
    document.getElementById("imgabout").src = Arreglo[count];
    console.log(count);
    count ++;
}
function bruh(){
    console.log(document.getElementById("idnombre").value)
}
console.log(document.getElementById("idnombre").value.lenght)
var checarnom = document.getElementById("idnombre")
var checaremail = document.getElementById("idemail")
var checarcom = document.getElementById("idcomentario")
function comprobar(){
    //if (document.getElementById("idnombre").value === null || "" && document.getElementById("idemail").value === null  || "" && document.getElementById("idcomentario").value === null  || ""){
    //    alert("Por favor llene todos los espacios.")
   // }
   // else {
   //     alert("Forms Enviado.")
   // }
    
   
}

let opacitychange = 1;
$("button").click(function(){
    opacitychang = opacitychange - 0.1;
    $(".button").animate({
        opacity: opacitychange
    })
})

var matrizc =[]
console.log(matrizc)
function guardarcommentario(){
    const comentario = document.getElementById("idcomentario");
     matrizc.push(comentario.value)
     
     console.log(comentario)
}
function mostrarAlerta() {
    alert("queso * queso * queso");
}
var quesos = ("Queso Crema", "Queso Panela", "Queso Mozarrella", "crema", "panela", "mozarrella")
//Set<String> quesos == Set.of("Queso Crema", "Queso Panela", "Queso Mozarrella", "crema", "panela", "mozarrella");

const character = quesos.entries;
const searchbar = document.getElementById('searchbar');
console.log(searchbar);
searchbar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
   // const searchtext = e.target.value;
    //quesos.filter(character => {
   // return    character.quesos.contains(searchtext)
  //  });
})
console.log(character)

const texto = document.getElementsByTagName("li");
console.log(texto);
function clickname(){
    const infoCont = document.getElementsByClassName('dropdown-item');
    console.log(infoCont)
    console.log('queso')

    const querySelector = document.querySelector('p') //les trae el primero que encuentre  por ahorita, saca el primer texto
    console.log(querySelector)
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

