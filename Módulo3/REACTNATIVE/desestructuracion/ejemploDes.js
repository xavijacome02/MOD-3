recuperar=()=>{
  let frutas=["pera","manzana","sandia"];
  frutas.push("uva");
  return frutas;
}

testRecuperar=()=>{
  let misFrutas=recuperar();
  let primeraFruta=misFrutas[0];
  let otraFruta=misFrutas[1];


  console.log("1--> "+primeraFruta);
  console.log("2--> "+otraFruta);

}


testRecuperarDes=()=>{
  let [primeraFruta,otraFruta, siguienteFruta]=recuperar();// creo varias variables
  console.log("1--> "+primeraFruta);
  console.log("2--> "+otraFruta);
  console.log("3--> "+siguienteFruta);

}