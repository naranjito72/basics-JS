let bebidas = [
    'cerveza',
    'coca-cola',
    'leche'
];
/* let edad = prompt('How old are you?'); */

/* let cervezaCheck = document.getElementById('check1').checked;
console.log(cervezaCheck); */
/*Con esta formula no me deja ni elegir del checklist */

document.getElementById('boton1').onClick = function(){
    myFunction();
}
function myFunction() {
    
     
     document.getElementById('pintar').innerHTML = edad;
  } 
function addClassCheck(e){
    if(e.checked){
        e.classList.add("marked");
    }else{
        e.classList.remove("marked");
    }
    if(document.getElementsByClassName("marked").length > 1){
        alert("Marca sólo una opción por favor.");
        e.checked = false;
        e.classList.remove("marked");
    }
}
function getValue(value){
    let edadBebidas = prompt(value +" "+ "...um, ...let me see:"+ " "+'How old are you?');
    if( edadBebidas == ('')){
        alert('no age, no drink!');
    }else if( edadBebidas < ('18')){
        alert('There is no way you can drink that here. Truly sorry.');
    }else{
        alert('You are big enough, do enjoy it!');
    }
}
function getValue1(value){
    let edadBebidas = prompt(value +" "+ "...um, ...let me see:"+ " "+'How old are you?');
    if( edadBebidas == ('')){
        alert('no age, no drink!');
    }else if( edadBebidas < ('16')){
        alert('Your teeth are not ready yet!');
    }else{
        alert('Have fun and enjoy it!');
    }
}
function getValue2(value){
    let edadBebidas = prompt(value +" "+ "...um, ...let me see:"+ " "+'How old are you?');
    if( edadBebidas == ('')){
        alert('no age, no drink!');
    }else{
        alert('Best thing to look after yourself!');
    }
}
function dataCheckBox(){
    
}
function mayorEdad(){
   //necesito recoger la data del checkbox primero
}


/*BIBLIOGRAFIA
Checklist

Recogida datos check list y aparición prompt

https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox
respuesta: ZOE
*/