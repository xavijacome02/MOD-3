import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedor1}>
      <View style={styles.contenedor2}>
      <Button title='X'/>
      <Button title='Y'/>
      <Button title='Z'/>
      </View>
      <View style={styles.contenedor3}>
      
      <View style={styles.contenedor5}>

      <View style={styles.contenedor7}>
      <Button title='BOTON 1'/>
      <Button title='BOTON 2'/>
      
      </View>
      <View style={styles.contenedor8}>
      <Button title='OPERACION 1'/>
      <Button title='OPERACION 2'/>
      <Button title='OPERACION 3'/>
      </View>

      </View>
      <View style={styles.contenedor6}>
      <Button title='ACCION 1'/>
      <Button title='ACCION 2'/>
      </View>
      </View>
      <View style={styles.contenedor4}>
      <Button title='BOTON FINAL'/>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor1: {
    flex: 1,
    backgroundColor: 'yelow',
    justifyContent: 'center',
  },

  contenedor2:{
    flex:1,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },

  contenedor3:{
    flex:6,
    backgroundColor:'blue',
    flexDirection:'column',
  },

  contenedor4:{
    flex:1,
    backgroundColor:'pink',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'

  },

  contenedor5:{
    flex:4,
    backgroundColor:'green',
    flexDirection:'row',
  },

  contenedor6:{
    flex:1,
    backgroundColor:'purple',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end'
  },

  contenedor7:{
    flex:1,
    backgroundColor:'brown',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'stretch'
  },

  contenedor8:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start'

  },

});
