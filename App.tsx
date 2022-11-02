import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Buttons from './src/components/buttons/Buttons';
import Toolbar from './src/components/toolbar/Toolbar';
import Cards from './src/components/cards/Cards';
import CheckboxInput from './src/components/checkbox/CheckboxInput';
import Inputfield from './src/components/input/Inputfield';
import Toggle from './src/components/toggle/Toggle';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Toolbar></Toolbar>
      <Buttons></Buttons>
      <Cards></Cards>
      <CheckboxInput></CheckboxInput>
      <Inputfield></Inputfield>
      <Toggle></Toggle>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  },
});
