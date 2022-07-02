import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Text from '../Text';
import colors from '../../lib/colors';

export type ButtonProps = {
  disabled?: boolean;
  onPress: () => void;
  text: string;
};

const Button = ({disabled, text, onPress}: ButtonProps) => (
  <TouchableHighlight
    activeOpacity={1}
    disabled={disabled}
    onPress={onPress}
    underlayColor={colors.primaryDarker}
    style={[styles.button, disabled ? styles.buttonDisabled : null]}>
    <Text style={[styles.buttonText]}>{text}</Text>
  </TouchableHighlight>
);

Button.defaultProps = {
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 4,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: colors.primaryLighter,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
