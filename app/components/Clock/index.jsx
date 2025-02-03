import {nowToHHMM} from '../../../utils';
import styles from './Clock.style';
import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';


export function Clock() {
    const [time, setTime] = useState(nowToHHMM());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(nowToHHMM());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return <><Text style={styles.time}> {time}</Text>
       </>
}