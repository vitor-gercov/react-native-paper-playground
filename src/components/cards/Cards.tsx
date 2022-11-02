import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import globalStyles from '../../styles';

export default function Cards() {
    return (
        <View>
            <Text style={globalStyles.title}>Card</Text>
            <Card>
                <Card.Content>
                    <Title>Título do card</Title>
                    <Paragraph>Parágrafo de exemplo.</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </View >
    )
}