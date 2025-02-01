import { Text, View } from "react-native";

import styles from './Home.style';
import React from "react";

export default  function Home() {
    return <><View style={styles.basicInfo}>
        <Text style={styles.txt}>
            Basic Weather info
        </Text>
    </View>
    <View style={styles.searchBar}>
        <Text style={styles.txt}>
           SearchBar
        </Text>
    </View>
    <View style={styles.advancedInfo}>
        <Text style={styles.txt}>
            Advanced Weather info
        </Text>
    </View>
    
    </>
}