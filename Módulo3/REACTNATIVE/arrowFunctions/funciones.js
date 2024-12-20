ejecutarSumar=()=>{
  let valor1=recuperarEntero("txtValor1");
  let valor2=recuperarEntero("txtValor2");
  let resultadoSuma;
  console.log("valor1--> "+valor1);
  console.log("valor2--> "+valor2);
  resultadoSuma=sumar(valor1,valor2);
  console.log("El resultado de la suma es: "+resultadoSuma);
}

ejecutarResta=()=>{
  let numero1=recuperarFloat("txtValor1");
  let numero2=recuperarFloat("txtValor2");
  let resultadoResta;
  resultadoResta=restar(numero1,numero2);
  console.log("El resultado de la resta es: "+resultadoResta);
}

sumar=(num1,num2)=>{
  let resultado=num1+num2;
  return resultado;
}

restar=(num1,num2)=>{
  let resultado=num1-num2;
  return resultado;
}