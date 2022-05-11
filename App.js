import React from 'react';
import { ScrollView, View, Image, Dimensions, ImageBackground } from 'react-native';
import Header from './components/header';
import { style } from './components/header/style';
import Parking from './components/header/api';

const App = () => {
    return (
      <View>
        <ImageBackground source={require('./images/parking_cars_lamps.jpg')} style={style.imgParking} />
        <Header content='Parking' />
      <ScrollView bounces={false} showsVerticalScrollIndicator={true} style={{height: Dimensions.get('window').height}} >
        <View style={style.container}>
          <Parking/>
        </View>
      </ScrollView>
      </View>
    );
}

export default App;