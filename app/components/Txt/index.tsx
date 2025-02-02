import { Text } from 'react-native';
import styles from './txt.style';

interface TxtProps {
    children: string;
    restPrps?: any;
    style?: object;
  }
  
export function Txt({children ,style, ...restPrps}  : TxtProps ) {
    return <Text style={[styles.txt, style]} {...restPrps}>{children}</Text>;
}