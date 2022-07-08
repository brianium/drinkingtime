import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Text, {Props as TextProps} from '../Text';
import * as styles from '../../lib/styles';
import colors from '../../lib/colors';

interface Props extends TextProps {
  onPress: () => void;
}

const Link = (props: Props) => {
  const {onPress, ...textProps} = props;
  const [pressed, setPressed] = useState(false);
  const style = styles.merge(linkStyles.text, props.style);
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <Text
        {...textProps}
        style={[style, pressed ? linkStyles.textPressed : null]}
      />
    </Pressable>
  );
};

const linkStyles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  textPressed: {
    color: colors.primaryDarker,
    textDecorationLine: 'none',
  },
});

export default Link;
