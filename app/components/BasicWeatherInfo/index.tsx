import { Text, View, Image } from 'react-native';
import styles from './basicWeatherInfo.style';
import Txt from '../Txt';
import Clock from '../Clock/index';

import React from 'react';


  
export default function BasicWeatherInfo({temperature, interpretation, city}: any) {
    return <> <View style={styles.clock}>
            <Clock />
        </View>
        <View style={styles.city}><Txt>{city}</Txt></View>
        <View style={styles.interpretation}><Txt>{interpretation?.label}</Txt></View>
        <View style={styles.temp}>
            <Txt style={styles.temperature}>{temperature}&deg;</Txt>
        <Image style={styles.img} source={interpretation?.image} />
        </View>
    </> ;
}