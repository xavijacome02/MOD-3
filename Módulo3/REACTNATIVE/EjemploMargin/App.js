import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import{useState} from 'react'
export default function App() {

  const[nombre,setNombre]=useState()
  const[apellido,setApellido]=useState()

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJEMPLO MARGIN</Text>
      <TextInput 
      style={styles.caja}
      value={nombre}
      onChangeText={setNombre}
      placeholder="Ingrese su nombre" //Es el mensaje que aparece al inicio y cuando escribe se desaparece
      />

      <TextInput
      style={styles.caja}
      value={apellido}
      onChangeText={setApellido}
      placeholder="Ingrese el apellido"
      />
      <StatusBar style="auto" />

      <Button
      title='OK'

      />
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
  }
});
