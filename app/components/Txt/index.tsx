import { Text } from 'react-native';
import styles from './txt.style';

interface TxtProps {
    children: string;
    restPrps: any
  }
  
export function Txt({children , ...restPrps}  : TxtProps ) {
    return <Text style={styles.txt} {...restPrps}>{children}</Text>;
}