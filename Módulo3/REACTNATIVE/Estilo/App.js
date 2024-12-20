import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Button title='COMP 1'/>
      <Button title='COMP 2' color="blue"/>
      <Button title='COMP 3'/>

      <StatusBar style="auto" />
    </View>
  );
}
//por defaul de flexdirection es colum
// por deaful de justirycontent flex start
//''''alignitems center
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"stretch"
  },
});
