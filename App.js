import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { style } from './components/header/style';
import Parking from './components/header/api';

const App = () => {
    return (
      <SafeAreaView style={style.container}>
        <View>
          <Header content='Parking' />
        </View>
        <Parking/>
      </SafeAreaView>
    );
}

export default App;