import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { ContenidoA } from "./app/screens/ContenidoA"
import { ContenidoB } from "./app/screens/ContenidoB"
import { ListGrade } from './app/ListGrade'
import { GradeForm } from './app/GradeForm'
import{Icon} from '@rneui/base'


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoA"
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel: "Configuracion",
          tabBarIcon: ({size,tintColor}) => {
            return <Icon name='tool' size={size} color={tintColor} type="ant-design"/>
          }
        }}
      />

      <Tab.Screen 
        name="TabContenidoB"
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel: "Acerca De",
          tabBarIcon: ({size,tintColor}) => {
            return <Icon name='mail' size={size} color={tintColor} type="ant-design"/>
          }
        }}
      />


    </Tab.Navigator>
  )
}
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerEjemploTabs"
        component={TabNav}
        options={{
          title: 'Finalizar Sesión'
        }}
      />


    </Drawer.Navigator>
  )
}

export default function App() {
  const StackGrade = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackGrade.Navigator>

        <StackGrade.Screen name="EjemploTab" component={DrawerNav}/>
    
      </StackGrade.Navigator>

    </NavigationContainer>
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
