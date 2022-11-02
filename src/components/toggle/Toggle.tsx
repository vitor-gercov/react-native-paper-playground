import React from 'react';
import { View, Text } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import globalStyles from '../../styles';

export default function Toggle() {
    const [value, setValue] = React.useState('left');

    return (
        <View>
            <Text style={globalStyles.title}>Toggle</Text>
            <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
                <ToggleButton icon="format-align-left" value="left" />
                <ToggleButton icon="format-align-right" value="right" />
            </ToggleButton.Row>
        </View >
    )
}