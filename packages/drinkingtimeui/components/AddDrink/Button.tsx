import React, {useState} from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';
import Text from '../Text';
import colors from '../../lib/colors';

interface Props {
  onPress: () => void;
}

/**
 * The blank state button used to initiate a drink selection
 */
const Button = ({onPress}: Props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[styles.button, pressed ? styles.buttonPressed : null]}>
      <Image
        source={
          pressed ? require('./src/AddPressed.png') : require('./src/Add.png')
        }
      />
      <Text
        style={[styles.buttonText, pressed ? styles.buttonPressedText : null]}>
        Add Drink
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: colors.lightGrey,
    borderStyle: 'dashed',
    borderRadius: 6,
    borderWidth: 2,
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    width: '100%',
  },
  buttonPressed: {
    borderColor: colors.grey,
  },
  buttonText: {
    color: colors.lightGrey,
    fontSize: 18,
    marginLeft: 12,
  },
  buttonPressedText: {
    color: colors.grey,
  },
});

export default Button;
