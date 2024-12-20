import { StatusBar } from 'expo-status-bar';
import { Alert,Button,TextInput,StyleSheet, Text, View } from 'react-native';
import{useState} from 'react'

export default function App() {
  const[primerNumero,setPrimerNumero]=useState(" ")
  const[segundoNumero,setSegundoNumero]=useState(" ")
  const [resultadoS,setResultadoS]=useState(" ")
  const [resultadoR,setResultadoR]=useState(" ")
  const [resultadoM,setResultadoM]=useState(" ")
  const [resultadoD,setResultadoD]=useState(" ")
  const [mostrarResultadoS, setMostrarResultadoS] = useState(false);
  const [mostrarResultadoR, setMostrarResultadoR] = useState(false);
  const [mostrarResultadoM, setMostrarResultadoM] = useState(false);
  const [mostrarResultadoD, setMostrarResultadoD] = useState(false);

   return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>
      <StatusBar style="auto" />
      <Text>Primer Numero</Text>
      <TextInput
      style={styles.cajaTexto}
      value={primerNumero}
      onChangeText={(txt)=>{
        setPrimerNumero(txt);
      }
      
    }
      />
      <Text>Segundo Numero</Text>
      <TextInput
      style={styles.cajaTexto}
      value={segundoNumero}
      onChangeText={(txt)=>{
        setSegundoNumero(txt);
      }}
      />
      
      <Button
      title='SUMAR'
      onPress={(num1,num2)=>{
        
        num1=parseFloat(primerNumero);
        num2=parseFloat(segundoNumero);
        if(isNaN(num1) || isNaN(num2)){
          Alert.alert("ALERTA","INGRESAR CORRECTAMENTE LOS NUMEROS")
        }else{
          setResultadoS(num1 + num2);
            setMostrarResultadoS(true);
            setMostrarResultadoR(false);
            setMostrarResultadoM(false);
            setMostrarResultadoD(false);
        } 
      }
      
    }
      />

<Button
      title='RESTAR'
      onPress={(num1,num2)=>{
        
        num1=parseFloat(primerNumero);
        num2=parseFloat(segundoNumero);
        if(isNaN(num1) || isNaN(num2)){
          Alert.alert("ALERTA","INGRESAR CORRECTAMENTE LOS NUMEROS")
        }else{
          let resultado=num1-num2;
          setResultadoR(resultado);
          setResultadoR(num1 - num2);
            setMostrarResultadoS(false);
            setMostrarResultadoR(true);
            setMostrarResultadoM(false);
            setMostrarResultadoD(false);
        } 
      }
      
    }
      />

<Button
      title='MULTIPLICAR'
      onPress={(num1,num2)=>{
        
        num1=parseFloat(primerNumero);
        num2=parseFloat(segundoNumero);
        if(isNaN(num1) || isNaN(num2)){
          Alert.alert("ALERTA","INGRESAR CORRECTAMENTE LOS NUMEROS")
        }else{
          let resultado=num1*num2;
          setResultadoM(resultado);
          setResultadoR(num1 - num2);
            setMostrarResultadoS(false);
            setMostrarResultadoR(false);
            setMostrarResultadoM(true);
            setMostrarResultadoD(false);
        } 
      }
      
    }
      />

<Button
      title='DIVIDIR'
      onPress={(num1,num2)=>{
        
        num1=parseFloat(primerNumero);
        num2=parseFloat(segundoNumero);
        if(isNaN(num1) || isNaN(num2)){
          Alert.alert("ALERTA","INGRESAR CORRECTAMENTE LOS NUMEROS")
        }else{
          if(num2!=0){
            let resultado=num1/num2;
          setResultadoD(resultado);
          setResultadoR(num1 - num2);
            setMostrarResultadoS(false);
            setMostrarResultadoR(false);
            setMostrarResultadoM(false);
            setMostrarResultadoD(true);
        }else{
          Alert.alert("ALERTA","DIVISION PARA CERO NO EXISTE")

        }
      } 
      }
      
    }
      />   
      {mostrarResultadoS && <Text>Suma: {resultadoS}</Text>}
      {mostrarResultadoR && <Text>Resta: {resultadoR}</Text>}
      {mostrarResultadoM && <Text>Multiplicación: {resultadoM}</Text>}
      {mostrarResultadoD && <Text>División: {resultadoD}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cajaTexto:{
    borderColor:"blue",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10
  } 
});
