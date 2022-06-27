import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Text from '../Text';
import colors from '../../lib/colors';

export type ButtonProps = {
  onPress: () => void;
  text: string;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 4,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Button = ({text, onPress}: ButtonProps) => (
  <TouchableHighlight
    activeOpacity={1}
    onPress={onPress}
    underlayColor={colors.primaryDarker}
    style={[styles.button]}>
    <Text style={[styles.buttonText]}>{text}</Text>
  </TouchableHighlight>
);

export default Button;
