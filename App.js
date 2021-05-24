

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import HomeScreen from './app/homeScreen';
import PortableScreen from './app/portableScreen';
import reducers from './app/redux/reducers'

const App =() => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={createStore(reducers)}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <HomeScreen /> */}
        <PortableScreen/>
      </View>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea:{
    flex:1
  }

});

export default App;
