import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';

const Header = ({ content }) => (
    <View style={style.titleP}>
        <Text style={style.text}>{content}</Text>
    </View>
);

export default Header;
