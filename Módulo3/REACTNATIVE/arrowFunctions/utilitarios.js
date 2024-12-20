/*recuperarTexto=function(idComponente){
  let componente=document.getElementById(idComponente);
  let valorComponente=componente.value;
  return valorComponente;
}*/

// ARROW FUNCTIONS
recuperarTexto=(idComponente)=>{
  let componente=document.getElementById(idComponente);
  let valorComponente=componente.value;
  return valorComponente;
}


recuperarEntero=(idComponente)=>{
  let valoTxt=recuperarTexto(idComponente);
  let valorEntero=parseInt(valoTxt);
  return valorEntero;
}

recuperarFloat=(idComponente)=>{
  let valoTxt=recuperarTexto(idComponente);
  let valorFloat=parseFloat(valoTxt);
  return valorFloat;
}


