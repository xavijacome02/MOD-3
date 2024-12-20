import { StatusBar } from 'expo-status-bar';
import { Alert,Button,TextInput,StyleSheet, Text, View } from 'react-native';
import{useState} from 'react'

export default function App() {
  const[valorDolar,setValorDolar]=useState("")
  const[pesosMex,setPesosMex]=useState("")
  const[pesosCol,setPesosCol]=useState("")
  const[euros,setEuros]=useState("")

  const[convertidosMex,setConvertidosMex]=useState(false)
  const[convertidosCol,setConvertidosCol]=useState(false)
  const[convertidosEuros,setConvertidosEuros]=useState(false)



  return (
    <View style={styles.container}>
      <Text>Convertidor de monedas</Text>
      <StatusBar style="auto" />

    <Text>Ingresar el valor en Dolar</Text>
    <TextInput
    style={styles.cajaTexto}
    value={valorDolar}
    onChangeText={(txt)=>{
      setValorDolar(txt);
    }}
    />
    <Button
    title='PESOS MEXICANOS'
    onPress={(valor)=>{
      valor=parseFloat(valorDolar);
      if(isNaN(valor)){
        Alert.alert("ALERTA","Ingrese correctamente la cantidad")
      }else{
        let resultado=valor*20.33
        setPesosMex(resultado.toFixed(2));
        setConvertidosMex(true);
        setConvertidosCol(false);
        setConvertidosEuros(false);
      }
    }
  }
    />

    <Button
    title='PESOS COLOMBIANOS'
    onPress={(valor)=>{
      valor=parseFloat(valorDolar);
      if(isNaN(valor)){
        Alert.alert("ALERTA","Ingrese correctamente la cantidad")
      }else{
        let resultado=valor*4409.19;
        setPesosCol(resultado.toFixed(2));
        setConvertidosMex(false);
        setConvertidosCol(true);
        setConvertidosEuros(false);
      }
    }
  }
    />

    <Button
    title='EUROS'
    onPress={(valor)=>{
      valor=parseFloat(valorDolar);
      if(isNaN(valor)){
        Alert.alert("ALERTA","Ingrese correctamente la cantidad")
      }else{
        let resultado=valor*0.95
        setEuros(resultado.toFixed(2));
        setConvertidosMex(false);
        setConvertidosCol(false);
        setConvertidosEuros(true);
      }
    }
  }
    />

  {convertidosMex && <Text>{pesosMex} Pesos Mexicanos</Text>}
  {convertidosCol && <Text>{pesosCol} Pesos Colombianos</Text>}
  {convertidosEuros && <Text>{euros} Euros</Text>}

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
