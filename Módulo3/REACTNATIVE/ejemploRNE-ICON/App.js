import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert } from 'react-native';
import { Button, Icon } from '@rneui/base';
import { Input } from '@rneui/themed';
import{useState} from 'react'

export default function App() {

  const[name,setName]=useState()

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
      value={name}
      onChangeText={setName}
      placeholder='INGRESE SU NOMBRE'
      label='Nombre'
      />
      <Text>{name}</Text>
      <Button
        title='OK'
        icon={{
          name: 'home',
          type: 'font-awesome',
          size: 15,
          color: 'white', 
        }}
        onPress={()=>{
          Alert.alert("INFO","Hola "+name)
        }}

      />

      <Button
        title='CANCEL'
        icon={<Icon
          name='cancel'
          type='MaterialCommunityIcons'
          size='15'
          color='white'
        />}

      />

      <Icon
        name='plancast'
        type='zocial'
        color='black'
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
