import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import IndexScreen from './src/Screen/IndexScreen'
import React from 'react'
import { Provider } from './src/context/BlogContext'
import ShowScreen from './src/Screen/ShowScreen'
import CreateScreen from './src/Screen/CreateScreen'
import EditScreen from './src/Screen/EditScreen'
import { Image, TouchableOpacity } from 'react-native'
const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        < Stack.Navigator>
          <Stack.Screen options={({ navigation }) => ({
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Image style={{ width: 35, height: 35 }} source={require('./src/Image/plus-512.webp')} />
            </TouchableOpacity>
          })}
            name='Blogs'
            component={IndexScreen}
          />
          {/* <Stack.Screen name='Blog' component={IndexScreen} /> */}
          <Stack.Screen options={({ navigation, route }) => ({
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
              <Image style={{ width: 25, height: 30 ,marginRight:5}} source={require('./src/Image/pencil.png')} />
            </TouchableOpacity>
          })} name='Blog' component={ShowScreen}
          />
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App

