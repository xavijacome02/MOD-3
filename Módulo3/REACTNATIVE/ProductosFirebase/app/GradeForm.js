import { StyleSheet, Text, View, Alert } from 'react-native';
import { Input, Button, Icon } from '@rneui/base';
import { useState } from 'react'
import { saveGrade, updateGrade } from './servicios/GradeServices'
export const GradeForm = ({ navigation, route }) => { //route para recuperar

  let isNew = true;
  let subjectR; //recuperado
  let gradeR;
  if (route.params.notaMuestra != null) {
    isNew = false;
  }
  if (!isNew) {
    subjectR = route.params.notaMuestra.subject
    gradeR = route.params.notaMuestra.grade
  }

  const [subject, setSubject] = useState(subjectR == null ? null : subjectR + "")
  const [grade, setGrade] = useState(gradeR == null ? null : gradeR + "")
  const [errorSubject, setErrorSubject] = useState()
  const [errorGrade, setErrorGrade] = useState()
  let hasError = false; //verificar el error 





  const save = () => {
    setErrorGrade(null)
    setErrorSubject(null)
    validate();
    if (!hasError) {
      if (isNew) {
        saveGrade({ subject: subject, grade: grade })
      } else {
        updateGrade({ subject: subject, grade: grade });
      }
      navigation.goBack();
      route.params.fnRefresh();
    }

  }

  const validate = () => {
    if (subject == null || subject == "") {
      setErrorSubject("Debe ingresar una materia");
      hasError = true;
    }
    let gradeFloat = parseFloat(grade);
    if (gradeFloat == null || isNaN(gradeFloat) || grade < 0 || grade > 10) {
      setErrorGrade("Debe ingresar una nota entre 0 y 10");
      hasError = true;
    }
  }



  return <View style={styles.container}>
    <Text>FORMULARIO DE NOTAS</Text>
    <Input
      value={subject}
      onChangeText={setSubject}
      placeholder='Ejemplo: Matematicas'
      label="Materia"
      errorMessage={errorSubject}
      disabled={!isNew}
    />

    <Input
      value={grade}
      onChangeText={setGrade}
      placeholder='0-10'
      label="Nota"
      errorMessage={errorGrade}
    />
    <Button
      title='Guardar'
      icon={<Icon
        name='save'
        type='entypo'
        size='15'
        color='white'
      />}

      buttonStyle={styles.saveButton}
      onPress={save}
    />

  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveButton: {
    backgroundColor: 'black',
  }
});
