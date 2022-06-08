import React from 'react';
import { ScrollView, View, Dimensions, ImageBackground, Text } from 'react-native';
/* Importing the Header and Parking components from the header folder. */
import Parking from './components/header/api';
/* Importing the style object from the style.js file. */
import { style } from './components/header/style';

/* A function that returns a component. */
const App = () => {
    return (
      <View>
        {/* Displaying an image as a background. */}
        <ImageBackground source={require('./images/parking_cars_lamps.jpg')} style={style.imgParking} />
        {/* A component that is used to display the title of the application. */}
        <View style={style.titleP}>
          <Text style={style.text}>Parking</Text>
        </View>
      {/* A component that is used to display a scrollable list of elements. */}
      <ScrollView bounces={false} showsVerticalScrollIndicator={true} style={{height: Dimensions.get('window').height}} >
        <View style={style.container}>
          <Parking/>
        </View>
      </ScrollView>
      </View>
    );
}

/* Exporting the App component. */
export default App;