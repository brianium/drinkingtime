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

export enum State {
  default = 'default',
  error = 'error',
}

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle> | undefined;
  inputStyle?: StyleProps<TextStyle> | undefined;
  label: string;
  size?: Size;
  state?: State;
  unit?: string | undefined;
}

const TextInput = (props: Props) => {
  const nativeInput = useRef(null);
  const {style, inputStyle, unit, label, size, message, state, ...inputProps} =
    props;
  const controlStyles = mergeStyles([styles.control, style]);
  const inputStyles = mergeStyles([styles.input], inputStyle);

  const focusInput = () => {
    nativeInput.current.focus();
  };

  const inputSizeStyle =
    size === Size.Large ? styles.inputLarge : styles.inputSmall;

  const labelSizeStyle =
    size === Size.Large ? styles.labelLarge : styles.labelSmall;

  return (
    <View style={[styles.container]}>
      <Pressable
        style={[
          controlStyles,
          size === Size.Large ? styles.controlLarge : styles.controlSmall,
          state === State.default ? styles.controlDefault : styles.controlError,
        ]}
        onPressIn={focusInput}>
        <View
          style={[
            styles.labelContainer,
            size === Size.Large
              ? styles.labelContainerLarge
              : styles.labelContainerSmall,
          ]}>
          <Text style={[styles.label, labelSizeStyle]}>{label}</Text>
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
      {message && (
        <Text
          style={[
            styles.message,
            state === State.default
              ? styles.messageDefault
              : styles.messageError,
            labelSizeStyle,
          ]}>
          {message}
        </Text>
      )}
    </View>
  );
};

TextInput.defaultProps = {
  size: Size.Large,
  state: State.default,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  control: {
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 2,
    flexDirection: 'row',
  },
  controlDefault: {
    borderColor: colors.primary,
  },
  controlError: {
    borderColor: colors.danger,
  },
  controlLarge: {
    paddingHorizontal: 19,
    paddingVertical: 16,
  },
  controlSmall: {
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
  message: {
    marginTop: 6,
  },
  messageDefault: {
    color: colors.grey,
  },
  messageError: {
    color: colors.danger,
  },
});

export default TextInput;
