import { Text, useWindowDimensions } from 'react-native';
import styles from './txt.style';

interface TxtProps {
    children: string;
    restPrps?: any;
    style?: {
      fontSize?: number
    };
  }

const IPHONE_RATIO = 0.001184834123222749;
export default function Txt({children ,style, ...restPrps}  : TxtProps ) {
  const fontSize = style?.fontSize || styles.txt.fontSize;
  const {height} = useWindowDimensions();
  console.log(1/height)

    return <Text style={[styles.txt, style, {fontSize: Math.round(fontSize * IPHONE_RATIO * height )}]} {...restPrps}>{children}</Text>;
}