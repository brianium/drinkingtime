import React from 'react';
import {StyleSheet, View} from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import Text, {TextStyle} from '../../components/Text';
import Button from '../../components/Button';
import Drink, {DrinkType, Size} from '../../components/Drink';
import colors from '../../lib/colors';

interface Props {
  onButtonPress: () => void;
}

const Home = (props: Props) => (
  <SafeAreaView style={styles.view}>
    <Drink size={Size.Large} style={styles.drink} type={DrinkType.Beer} />
    <Text style={styles.title} textStyle={TextStyle.Title}>
      Drinking Time
    </Text>
    <View style={styles.button}>
      <Button text="Start Drinking" onPress={props.onButtonPress} />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  drink: {
    marginTop: 62,
  },
  title: {
    color: colors.black,
    fontSize: 48,
    marginTop: 24,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 83,
  },
});

export default Home;
