import styles from './SearchBar.style';
import Txt from '../Txt';
import { TextInput } from 'react-native';

export default function SearchBar({onSubmit}) {
    return <TextInput style={styles.input} placeholder='Type a city... Ex: Noida' onSubmitEditing={(evt) => onSubmit(evt.nativeEvent.text) }/>
}