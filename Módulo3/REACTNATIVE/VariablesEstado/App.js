import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import{useState} from 'react'

export default function App() {

/*const arreglo=useState(0);
const contadorEstado=arreglo[0];
const setContadoEstado=arreglo[1]; /// CAMBIA EL VALOR Y REPINTA LA PANTALLA vuelve a ejecutar todo el codigo
*/

const [contadorEstado,setContadorEstado]=useState(0);
const [vidas,setVidas]=useState(5);

  const incrementar=()=>{
    setContadorEstado(contadorEstado+1);
    //console.log("Contador Estado--> "+contadorEstado);
  }

  const decrementar=()=>{
    setContadorEstado(contadorEstado-1)
  }
  
  const perderVidas=()=>{
    setVidas(vidas-1);
    if(vidas==0){
      Alert.alert("ADVERTENCIA","GAME OVER");
      setVidas(vidas);
    }
  }

  const aumentarVida=()=>{
    setVidas(vidas+3);

  }

  return (
    <View style={styles.container}>
      <Text>Proyecto Variables Estado</Text>

      <Text>CONTADOR ESTADO {contadorEstado}</Text>
      <Text>VIDAS{vidas}</Text>
      <Button 
      title='INCREMENTAR'
      onPress={incrementar}
      />
      <Button 
      title='DECREMENTAR'
      onPress={decrementar}
      />

      <Button
      title='PERDER VIDAS'
      onPress={perderVidas}
      />

      <Button
      title='PREMIAR'
      onPress={aumentarVida}
      />

      <StatusBar style="auto" />
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
});
