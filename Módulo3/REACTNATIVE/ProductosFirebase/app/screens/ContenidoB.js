import { StyleSheet, Text, View } from 'react-native';
export const ContenidoB = () => {
  return (
    <View style={styles.container}>
      <Text>CONTENIDO B</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});