import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const despedirse=()=>{
      Alert.alert("MENSAJE","ADIOS")
  }
  return (
    <View style={styles.container}>
      <Text>BIENVENIDOOO EDISON JACOME!!</Text>
      <StatusBar style="auto" /> 
      <Button
        title='OK'
        //funcion que no recibe parametros no retorna nada
        onPress={()=>{
          Alert.alert("MENSAJE","FUNCIONAAA!!")
        }}
      />

      <Button
      title='DESPEDIRSE'
      onPress={
        despedirse() //OJO
      }
      />
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
