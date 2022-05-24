import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';

/**
 * Header is a function that takes in a content prop and returns a View component with a Text component
 * nested inside of it.
 */
const Header = ({ content }) => (
    <View style={style.titleP}>
        <Text style={style.text}>{content}</Text>
    </View>
);

/* Exporting the Header component so that it can be imported into other files. */
export default Header;
