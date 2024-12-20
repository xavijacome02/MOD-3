import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor2}></View>
      <View style={styles.contenedor3}>
        <View style={styles.contenedor4}></View>
        <View style={styles.contenedor5 }>
          <View style={styles.contenedor6}></View>
          <View style={styles.contenedor7}>
            <Button title='BOTON 1'/>
            <Button title='BOTON 2'/>
            <Button title='BOTON 3'/>
          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection:'column',

  },

  contenedor2:{
    flex:1,
    backgroundColor:'red',
    flexDirection:'column',
  },

  contenedor3:{
    flex:3,
    backgroundColor:'yelow',
    flexDirection:'column',

  },

  contenedor4:{
    flex:1,
    backgroundColor:'green',
    flexDirection:'column',

  },

  contenedor5:{
    flex:1,
    backgroundColor:'black',
    flexDirection:'row',

  },

  contenedor6:{
    flex:1,
    backgroundColor:'orange',
    flexDirection:'column',

  },

  contenedor7:{
    flex:2,
    backgroundColor:'pink',
    flexDirection:'column',//eje principal vertical
    justifyContent:'space-around',//centrado vertical
    alignItems:'stretch' //eje secundario horizontal

  }
});
