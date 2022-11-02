import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import globalStyles from '../../styles';

export default function Buttons() {
    return (
        <View>
            <Text style={globalStyles.title}>Botões</Text>
            <Button icon="camera" mode='text'>Text</Button>
            <Button icon="camera" mode='outlined'>Outlined</Button>
            <Button icon="camera" mode='contained'>Contained</Button>
            <Button icon="camera" mode='contained-tonal'>Contained tonal</Button>
            <Button mode='elevated' uppercase={true}>Elevated</Button>
        </View>
    )
}