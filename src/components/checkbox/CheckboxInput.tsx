import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import globalStyles from '../../styles';

export default function CheckboxInput() {
    return (
        <View>
            <Text style={globalStyles.title}>Checkbox</Text>
            <Checkbox.Item label="Exemplo" status='checked'></Checkbox.Item>
        </View >
    )
}