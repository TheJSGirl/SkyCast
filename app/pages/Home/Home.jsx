import { Text, View } from "react-native";

import styles from './Home.style';
import React from "react";
import { Txt } from "@/app/components/Txt";
import { BasicWeatherInfo } from "@/app/components/BasicWeatherInfo";

export default  function Home({weather}) {
    return <><View style={styles.basicInfo}>
        {/* <Txt>Basic Weather info</Txt> */}
        console.log(weather.current_weather)
        <BasicWeatherInfo temperature={Math.round(weather.current_weather.temperature)}/>
    </View>
    <View style={styles.searchBar}>
        <Txt>SearchBar</Txt>
    </View>
    <View style={styles.advancedInfo}>
        <Txt>
        Advanced Weather info
        </Txt>
    </View>
    
    </>
}