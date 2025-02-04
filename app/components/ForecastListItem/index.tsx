import { View, Image } from 'react-native';
import styles from './forecastListItem.style';
import Txt from '../Txt';

interface propType  {
    image: string,
    day: number,
    date: number,
    temperature: string


}

export default function Forecasts({image, day, date, temperature}:propType ) {

    return <View style={styles.container}>
        <Image  source={image}  style={styles.image}/>
        <Txt style={styles.day}>{day}</Txt>
        <Txt style={styles.day}>{date}</Txt>
        <Txt style={styles.temp}>{temperature}</Txt>

    </View>


}