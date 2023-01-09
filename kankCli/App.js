
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './src/screens/Home';
import Map from './src/screens/Map';
const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <HomeScreen />
           
        </SafeAreaView>
    </>
  );
};

export default App;
