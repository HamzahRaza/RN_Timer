import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './homescreen';
import TimerScreen from './timerscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './app/store'


const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            title: 'POMODORO',
            headerShown: false,
            headerTruncatedBackTitle: true,
            headerStyle: {
              backgroundColor: 'black ',
              height: 0,
            },
            headerTintColor: 'gray',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Timer" component={TimerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;
