import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Txt from '../Txt';
import styles from './header.style';

  
export default function Header({city}) {
    const nav = useNavigation();
    return <View style={styles.container}>
        <TouchableOpacity onPress={nav.goBack} style={styles.back_btn}>
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
        <View  style={styles.header_txts}>
            <Txt>{city?.toUpperCase()}</Txt>
            <Txt style={styles.subtitle}>7 day forecasts</Txt>

        </View>
        <View/>
    </View>
  
}