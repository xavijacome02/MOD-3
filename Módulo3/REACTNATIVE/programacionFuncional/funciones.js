
ejecutarOperacion=(operar)=>{
  let valor1=recuperarEntero("txtValor1");
  let valor2=recuperarEntero("txtValor2");
  let resultado;
  resultado=operar(valor1,valor2);
  console.log(resultado);
}

sumar=(num1,num2)=>{
  let resultado=num1+num2;
  return resultado;
}

restar=(num1,num2)=>{
  let resultado=num1-num2;
  return resultado;
}

ejecutar=(fn)=>{
  console.log("Estoy ejecutando funciones");
  fn();
}

imprimir=()=>{
  console.log("Estoy imprimiendo");
}

saludar=()=>{
  alert("APRENDIENDO PROGRAMACION FUNCIONAL")
}

testEjecutar=()=>{
  ejecutar(imprimir);
  //ejecutar(saludar);
  ejecutar(()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL")
  });
}