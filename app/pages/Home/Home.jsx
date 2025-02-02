import { Text, View } from "react-native";

import styles from './Home.style';
import React from "react";
import { Txt } from "@/app/components/Txt";

export default  function Home() {
    return <><View style={styles.basicInfo}>
        <Txt>Basic Weather info</Txt>
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