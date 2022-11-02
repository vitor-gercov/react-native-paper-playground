import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import globalStyles from '../../styles';

export default function Inputfield() {
    return (
        <View>
            <Text style={globalStyles.title}>Input</Text>
            <TextInput
                mode="outlined"
                label="Example"
                placeholder="Type something"
                right={<TextInput.Affix text="/100" />}
            />
        </View >
    )
}