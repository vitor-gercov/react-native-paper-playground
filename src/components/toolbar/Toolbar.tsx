import { Appbar } from 'react-native-paper';
import { View, Text } from 'react-native';
import globalStyles from '../../styles';

export default function Toolbar() {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="calendar" onPress={() => { }} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>
    );
}