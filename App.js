import React from 'react';
import { ScrollView, View, Image, Dimensions } from 'react-native';
import Header from './components/header';
import { style } from './components/header/style';
import Parking from './components/header/api';

const App = () => {
    return (
      <ScrollView bounces={true} showsVerticalScrollIndicator={true} style={{height: Dimensions.get('window').height}} >
        <View style={style.container}>
          <Image source={require('./images/parking_cars_lamps.jpg')} style={style.imgParking} />
          <Header content='Parking' />
          <Parking/>
        </View>
      </ScrollView>
    );
}

export default App;