import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[peso,setPeso]=useState()
  const[estatura,setEstatura]=useState()
  const[calculo,setCalculo]=useState()

  const[pesoI,setPesoI]=useState(false)
  const[normal,setNormal]=useState(false)
  const[pesoS,setPesoS]=useState(false)
  const[obecidad,setObecidad]=useState(false)


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>
      <StatusBar style="auto" />

      <TextInput
      style={styles.caja}
      value={peso}
      onChangeText={(txt)=>{
        setPeso(txt)
      }}
      placeholder='Ingrese el peso en Kg'
      />

      <TextInput
      style={styles.caja}
      value={estatura}
      onChangeText={(txt)=>{
        setEstatura(txt)
      }}
      placeholder='Ingrese la estatura en cm'

      />

      <Button
      title='CALCULAR'
      onPress={(numPeso,numEstatura)=>{
        numPeso=parseFloat(peso);
        numEstatura=parseFloat(estatura)/100;
        const imc=((numPeso/(numEstatura*numEstatura)).toFixed(2));
        setCalculo(imc);
        if(imc<18.5){
          setPesoI(true)
          setNormal(false)
          setPesoS(false)
          setObecidad(false)
        }
        if(imc>=18.5 && imc<25){
          setPesoI(false)
          setNormal(true)
          setPesoS(false)
          setObecidad(false)        }
        if(imc>=25 && imc<30){
          setPesoI(false)
          setNormal(false)
          setPesoS(true)
          setObecidad(false)        }
        if(imc>=30){
          setPesoI(false)
          setNormal(false)
          setPesoS(false)
          setObecidad(true)
        }

      }
    }

      />
    <Text>IMC: {calculo}</Text>

    {pesoI && <Text>Su peso es inferior al normal</Text>}
    {normal && <Text>Su peso es normal</Text>}
    {pesoS && <Text>Su peso es superior al normal</Text>}
    {obecidad && <Text style={styles.mesajeRojo}>DEJA DE COMERRR TANTOOO</Text>}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column', //EJE PRINCIPAL ES EL VERTICAL
    justifyContent:'center', // AFECTA AL VERTICAL
    alignItems:'stretch', //AFECTA AL EJE SECUNDARIO 
    paddingHorizontal:10
  },
  caja:{
    borderColor:'black',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:5,
    marginBlockStart:10
  },
  titulo:{
    fontSize:15,
    marginBottom:10,
    fontWeight:'bold',
  },

  mesajeRojo:{
    fontSize:18,
    color:'red'

  }
});
