import { 
  
 } from 'expo-status-bar';
import { Alert,Button,StyleSheet, Text, View } from 'react-native';

export default function App() {

  const finalizar=()=>{
    Alert.alert("MENSAJE","SU SESION HA FINALIZADO")
  }
  return (
    <View style={styles.container}>
      <Text>PROYECTO EJEMPLO BOTONES</Text>
      <StatusBar style="auto" />
      <Button
      title='FINALIZAR'
        onPress={
          finalizar
        }
      />

      <Button
      title='INICIAR'
      onPress={()=>{
        Alert.alert("MENSAJE","SU SESION HA INICIADO")
      }
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
