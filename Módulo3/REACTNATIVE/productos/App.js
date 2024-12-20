import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, ScrollView, Alert, Modal } from 'react-native';
import { useState, useEffect } from 'react';

let productos = [
  { nombre: 'Doritos', categoria: 'Snack', precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: 'Manicho', categoria: 'Golosina', precioCompra: 0.20, precioVenta: 0.25, id: 101 },
  { nombre: 'Papitas', categoria: 'Snack', precioCompra: 0.50, precioVenta: 0.55, id: 103 },
  { nombre: 'Cheetos', categoria: 'Snack', precioCompra: 0.30, precioVenta: 0.35, id: 104 },
  { nombre: 'Coca Cola', categoria: 'Bebidas', precioCompra: 1.50, precioVenta: 1.80, id: 105 },
  { nombre: 'Fuze Te', categoria: 'Bebidas', precioCompra: 1.80, precioVenta: 2.00, id: 106 },

];

let esNuevo = true;
let idSeleccionado = -1;


export default function App() {

  const [txtId, setTxtId] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [numElementos, setNumElementos] = useState(productos.length);
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para el modal
  const [itemToDelete, setItemToDelete] = useState(null);

  let validarCompleto = () => {
    if (txtId == "" || txtNombre === "" || txtCategoria === "" || txtPrecioCompra == "" || isNaN(txtPrecioVenta)) {
      return false;
    }
    return true;
  };




  let ItemProductos = (props) => {
    return (
      <View style={styles.elementos}>
        <View>
          <Text>{props.productos.id}</Text>
        </View>

        <View style={styles.nombreProducto} >
          <Text style={styles.principal}>{props.productos.nombre}</Text>
          <Text>{props.productos.categoria}</Text>
        </View>

        <Text style={styles.secundario}> {props.productos.precioVenta}</Text>
        <View style={styles.itemBotones}>
          <TouchableOpacity onPress={() => {
            setTxtId(props.productos.id.toString());
            setTxtNombre(props.productos.nombre);
            setTxtCategoria(props.productos.categoria);
            setTxtPrecioCompra(props.productos.precioCompra.toString());
            setTxtPrecioVenta(props.productos.precioVenta);
            esNuevo = false;
            idSeleccionado = props.item;
            //console.log(idSeleccionado)


          }}>
            <Text> E </Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setItemToDelete(props.item);
            setIsModalVisible(true);
            //console.log(productos.length)
          }}>
            <Text> X </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

  let limpiar = () => {
    setTxtId(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null)
    esNuevo = true;
  };



  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == txtId) {
        return true;
      }
    }
    return false;
  }

  let guardarProducto = () => {
    if (!validarCompleto()) {
      Alert.alert("ALERTA", "Completar todos los campos");
      return;
    }

    let precioCompra = parseFloat(txtPrecioCompra);
    let precioVenta = parseFloat(txtPrecioVenta);

    if (esNuevo == true) {
      if (existeProducto() == true) {
        Alert.alert("ALERTA", "Ya existe un producto con el ID " + txtId);
      } else {
        let producto = {
          id: txtId,
          nombre: txtNombre,
          categoria: txtCategoria,
          precioCompra: precioCompra,
          precioVenta: precioVenta,
        };
        productos.push(producto);
      }
    } else {
      productos[idSeleccionado].id = txtId;
      productos[idSeleccionado].nombre = txtNombre;
      productos[idSeleccionado].categoria = txtCategoria;
      productos[idSeleccionado].precioCompra = precioCompra;

      productos[idSeleccionado].precioVenta = (precioCompra + precioCompra * 0.2).toFixed(2);
    }

    limpiar();
    setNumElementos(productos.length);
    esNuevo = true;
  };

  const handleDelete = () => {
    if (itemToDelete !== null) {
      productos.splice(itemToDelete, 1);
      setNumElementos(productos.length);
    }
    setIsModalVisible(false); // Cerrar modal
    setItemToDelete(null); // Limpiar selección
  };




  useEffect(() => {
    if (txtPrecioCompra) {
      setTxtPrecioVenta((parseFloat(txtPrecioCompra) + parseFloat(txtPrecioCompra) * 0.2).toFixed(2))
    }
  },
    [txtPrecioCompra])

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>¿Estás seguro que quieres eliminar este Producto?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
                <Text>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible(false)}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.areaCabecera}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>PRODUCTOS</Text>
        </View>
        <ScrollView>
          <TextInput

            style={styles.cajaTexto}
            value={txtId}
            placeholder='CODIGO'
            onChangeText={setTxtId}
            keyboardType="numeric"
            editable={esNuevo}


          />

          <TextInput
            style={styles.cajaTexto}
            value={txtNombre}
            placeholder='NOMBRE'
            onChangeText={setTxtNombre}
          />

          <TextInput
            style={styles.cajaTexto}
            value={txtCategoria}
            placeholder='CATEGORIA'
            onChangeText={setTxtCategoria}
          />

          <TextInput
            style={styles.cajaTexto}
            value={txtPrecioCompra}
            placeholder='PRECIO DE COMPRA'
            onChangeText={setTxtPrecioCompra}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.cajaTexto}
            value={txtPrecioVenta}
            placeholder='PRECIO DE VENTA'
            editable={false}
          />
        </ScrollView>

      </View>
      <View style={styles.areaBotones}>

        <TouchableOpacity onPress={guardarProducto}>
          <Text>GUARDAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          limpiar()
        }}>
          <Text>NUEVO</Text>
        </TouchableOpacity>


        <Text>Productos: {numElementos}</Text>
      </View>


      <FlatList
        style={styles.areaContenido}
        data={productos}
        renderItem={(obj) => {
          return <ItemProductos item={obj.index} productos={obj.item} />;
        }}
        keyExtractor={item => item.id}
      />

      <View style={styles.areaPies}>
        <Text> AUTOR: Edison Jacome</Text>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#faebd7',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  areaCabecera: {
    //flex: 1,
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  areaContenido: {
    flex: 1,
    // backgroundColor: 'blueviolet',
  },

  areaBotones: {
    //flex:0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'violet',

  },

  areaPies: {
    //flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  elementos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#93EEA4FF',
    borderWidth: 2,
    borderColor: '#04401EFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },

  tituloContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },

  principal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },

  secundario: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },

  nombreProducto: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  itemBotones: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cajaTexto: {
    borderWidth: 1,
    borderColor: '#04401EFF',
    borderRadius: 5,
    paddingTop: 3,
    paddingHorizontal: 6,
    marginBottom: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFFFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
}); 