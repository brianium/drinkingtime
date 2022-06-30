import React, {useRef} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  TextInputProps,
  TextInput as BaseTextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Text from '../Text';
import colors from '../../lib/colors';
import {merge as mergeStyles} from '../../lib/styles';

export enum Size {
  Large = 'large',
  Small = 'small',
}

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle> | undefined;
  inputStyle?: StyleProps<TextStyle> | undefined;
  label: string;
  size?: Size;
  unit?: string | undefined;
}

const TextInput = (props: Props) => {
  const nativeInput = useRef(null);
  const {style, inputStyle, unit, label, size, ...inputProps} = props;
  const containerStyles = mergeStyles([styles.container, style]);
  const inputStyles = mergeStyles([styles.input], inputStyle);

  const focusInput = () => {
    nativeInput.current.focus();
  };

  const inputSizeStyle =
    size === Size.Large ? styles.inputLarge : styles.inputSmall;

  return (
    <Pressable
      style={[
        containerStyles,
        size === Size.Large ? styles.containerLarge : styles.containerSmall,
      ]}
      onPressIn={focusInput}>
      <View
        style={[
          styles.labelContainer,
          size === Size.Large
            ? styles.labelContainerLarge
            : styles.labelContainerSmall,
        ]}>
        <Text
          style={[
            styles.label,
            size === Size.Large ? styles.labelLarge : styles.labelSmall,
          ]}>
          {label}
        </Text>
      </View>
      <BaseTextInput
        {...inputProps}
        ref={nativeInput}
        style={[inputStyles, inputSizeStyle]}
      />
      {unit ? (
        <Text style={[styles.unitText, inputSizeStyle]}>{unit}</Text>
      ) : null}
    </Pressable>
  );
};

TextInput.defaultProps = {
  size: Size.Large,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colors.primary,
    borderRadius: 6,
    borderWidth: 2,
    width: '100%',
    flexDirection: 'row',
  },
  containerLarge: {
    paddingHorizontal: 19,
    paddingVertical: 16,
  },
  containerSmall: {
    padding: 12,
  },
  input: {
    color: colors.black,
    fontFamily: 'Inria Sans',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 3,
  },
  inputSmall: {
    fontSize: 14,
  },
  inputLarge: {
    fontSize: 18,
  },
  unitText: {
    color: colors.grey,
    fontWeight: 'bold',
  },
  label: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  labelSmall: {
    fontSize: 10,
  },
  labelLarge: {
    fontSize: 14,
  },
  labelContainer: {
    backgroundColor: 'white',
    position: 'absolute',
  },
  labelContainerSmall: {
    top: -9,
    left: 7,
    paddingHorizontal: 3,
  },
  labelContainerLarge: {
    top: -17,
    left: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});

export default TextInput;
