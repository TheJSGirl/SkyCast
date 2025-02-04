import { View } from "react-native"
import styles from './advancedWeatherInfo.style';
import Txt from "../Txt";


export default function AdvancedWeatherInfo({sunrise, sunset, windspeed}: any) {
    return <View style={styles.container}>
        <View >
            <Txt style={styles.txtStyling}>{sunrise}</Txt>
            <Txt  style={styles.txtStyling} >Sunrise</Txt>

        </View>
        <View>
        <Txt style={styles.txtStyling}>{sunset}</Txt>
        <Txt  style={styles.txtStyling}>Sunset</Txt>

        </View>
        <View >
        <Txt style={styles.txtStyling}>{`${windspeed} km/h`}</Txt>
        <Txt  style={styles.txtStyling}>Wind speed</Txt>

        </View>

    </View>

}