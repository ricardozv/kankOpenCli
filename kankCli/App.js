
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './src/screens/Home';

const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <HomeScreen />
          <HomeScreen />
          <HomeScreen />

        </SafeAreaView>
    </>
  );
};

export default App;
