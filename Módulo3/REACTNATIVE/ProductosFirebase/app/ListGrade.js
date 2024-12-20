import { StyleSheet, Text, View, Alert, FlatList, TouchableHighlight } from 'react-native';
import { getGrades } from './servicios/GradeServices'
import { Avatar, FAB, ListItem } from '@rneui/base';
import { useState } from 'react';

export const ListGrade = ({ navigation }) => {
  const [time,setTime] = useState()

  const refresList=()=>{
    setTime(new Date().getTime());
  }
  const ItemGrade = ({ nota }) => {

    return <TouchableHighlight onPress={() => {
      navigation.navigate("GradeFormNav", { notaMuestra: nota,fnRefresh:refresList});
    }}>

      <ListItem bottomDivider>

        <Avatar

          title={nota.subject.substring(0, 1)} //tomando la primera letra
          containerStyle={{ backgroundColor: 'darkgrey' }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title>
            {nota.subject}
          </ListItem.Title>

        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title>
            {nota.grade}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron>

        </ListItem.Chevron>
      </ListItem >
    </TouchableHighlight>
  }
  return <View style={styles.container}>
    <FlatList
      data={getGrades()}
      renderItem={({ item }) => {
        return <ItemGrade nota={item} />
      }}
      keyExtractor={(item) => { return item.subject }}
      extraData={time} //Repintar
    />

    <FAB
      title='+'
      placement='right'
      onPress={() => {
        navigation.navigate("GradeFormNav", { notaMuestra: null, fnRefresh:refresList })
      }}
    />
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
