import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import { useState } from 'react';

//DEFINIR ARRGLO
let persona = [
  { nombre: 'Enner', apellido: 'Valencia', cedula: '1203116122' },
  { nombre: 'Dayana', apellido: 'Garcia', cedula: '1234578923' },
  { nombre: 'Edison', apellido: 'Jacome', cedula: '0954841441' },
];

//SIRVE PARA VER SI SE ESTA CREANDO UNA NUEVA PERSONA O SE ESTA MODIFICANDO UN EXISTENTE
let esNuevo = true;
//Almacena el indice del elemento sleccionado para editar
  let indiceSeleccionado= -1;

export default function App() {
  const [txtCedula, setTxtCedula] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtApellido, setTxtApellido] = useState();

  const [numElementos, setNumElementos] = useState(persona.length);

  let ItemPersona = ({indice,persona}) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.areaIndice}>
          <Text>{indice}</Text>
        </View>
        <View style={styles.areaItemContenido}>
          <Text style={styles.textoPrincipal}>
            {' '}
            {persona.nombre} {persona.apellido}{' '}
          </Text>
          <Text style={styles.textoSecundario}>{persona.cedula}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=" E "
            color="green"
            onPress={() => {
              //props.persona TRAE EL QUE ESTOY SELECCIONANDO
              setTxtCedula(persona.cedula);
              setTxtNombre(persona.nombre);
              setTxtApellido(persona.apellido);
              esNuevo = false;
              indiceSeleccionado = indice;
            }}
          />
          <Button
            title=" X "
            color="red"
            onPress={() => {
              indiceSeleccionado = indice;
              persona.splice(indiceSeleccionado - 1, 1); //eliminar varios elementos del arreglo (desde donde, cuantos)
              setNumElementos(persona.length);
            }}
          />
        </View>
      </View>
    );
  };

  let limpiar = () => {
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo = true;
  };

  let existePersona = () => {
    for (let i = 0; i < persona.length; i++) {
      if (persona[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  }
  let guardarPersona = () => {
    if (esNuevo == true) {
      if (existePersona() == true) {
        Alert.alert("ALERTA", "Ya existe una persona con la cedula " + txtCedula);
      } else {
        let personas = {
          nombre: txtNombre,
          apellido: txtApellido,
          cedula: txtCedula,
        };
        persona.push(personas);
      }

    } else {
      persona[indiceSeleccionado - 1].nombre = txtNombre;
      persona[indiceSeleccionado - 1].apellido = txtApellido;
    }
    limpiar();
    setNumElementos(persona.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>EJEMPLO LISTA</Text>
        <TextInput
          style={styles.cajaTexto}
          value={txtCedula}
          placeholder="Ingrese su cedula"
          onChangeText={setTxtCedula}
          keyboardType="numeric"
          editable={esNuevo}
        />

        <TextInput
          style={styles.cajaTexto}
          value={txtNombre}
          placeholder="Ingrese su nombre"
          onChangeText={setTxtNombre}
        />

        <TextInput
          style={styles.cajaTexto}
          value={txtApellido}
          placeholder="Ingrese su apellido"
          onChangeText={setTxtApellido}
        />

        <View style={styles.areaBotones}>
          <Button title="GUARDAR" onPress={guardarPersona} />
          <Button
            title="NUEVO"
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>

      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={persona} // es como un for del arreglo
          renderItem={({index,item}) => {
           
            return <ItemPersona indice={index +1} persona={item} />; //////////////////////////////////////
          }}
          keyExtractor={item => {
            //es como un PRIMARY KEY para ser unica el item
            return item.cedula;
          }}
        />
      </View>
      <View style={styles.areaPies}>
        <Text> AUTOR: Edison Jacome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  lista: {
     //backgroundColor:'#ff7f50'
  },

  itemPersona: {
    backgroundColor: '#faebd7',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
  },

  textoPrincipal: {
    fontSize: 20,
  },

  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 17,
  },

  areaCabecera: {
    flex: 4,
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },

  areaContenido: {
    flex: 6,
    // backgroundColor: 'blueviolet',
  },

  areaPies: {
    flex: 1,
    //backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  areaIndice: {
    // backgroundColor: 'darkorchid',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  areaItemContenido: {
    // backgroundColor: 'darkslategrey',
    flex: 6,
    paddingLeft: 6,
  },

  cajaTexto: {
    borderWidth: 1,
    borderColor: 'black',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5,
  },

  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  itemBotones: {
    // backgroundColor:'darkslategrey',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
