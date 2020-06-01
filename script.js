window.onload = slide('primeiro', 'segundo', 'terceiro')
var status = false;
var contador = 1;

function modo(){

  if(contador % 2 == 0){
      contador += 1;
      status = false;
      en_to_pt();
  }else{
      contador += 1;
      status = true;
      pt_to_en();
      contact()
  }

}

function pt_to_en(){
  var e = [...document.getElementsByClassName("pt_br")];

  e.forEach(element => {
    element.classList.add("hidden");
  })

  var m = [... document.getElementsByClassName("en_us")];

  m.forEach(element =>{
    element.classList.remove("hidden");
  })


}
function en_to_pt(){
  var e = [...document.getElementsByClassName("en_us")];

  e.forEach(element => {
    element.classList.add("hidden");
  })

  var m = [... document.getElementsByClassName("pt_br")];

  m.forEach(element =>{
    element.classList.remove("hidden");
  })
}

function slide(mostrar, esconder1, esconder2){
  if(mostrar == "primeiro"){
   config(mostrar, esconder1, esconder2);
  }else if(mostrar == "segundo"){
    config(mostrar, esconder1, esconder2);
  } else{
    config(mostrar, esconder1, esconder2);
  }
  var x = [...document.getElementsByClassName(mostrar)];
  x.forEach(element=>{
    element.classList.remove('esconder');
  })
  var y = [...document.getElementsByClassName(esconder1)];
  y.forEach(element=>{
    element.classList.add('esconder');
  })
  var z = [...document.getElementsByClassName(esconder2)];
  z.forEach(element=>{
    element.classList.add('esconder');
  })
}
function config(e, x, z){
  var li = document.getElementById(e);
   li.style.background = "red";
   li.style.opacity="0.5";

   var li = document.getElementById(x);
   li.style.background = "#f1f1f1";

   var li = document.getElementById(z);
   li.style.background = "#f1f1f1";
}