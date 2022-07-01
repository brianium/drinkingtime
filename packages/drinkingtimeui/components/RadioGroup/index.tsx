import React, {useCallback, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  ViewProps,
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native';
import Text from '../Text';
import colors from '../../lib/colors';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface RadioProps {
  label: string;
  value: string;
  isChecked: boolean;
  onPress: (v: string) => void;
}

export const Radio = (props: RadioProps) => {
  const {isChecked, value, label, onPress} = props;

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isChecked]);

  const handlePress = useCallback(() => {
    onPress(value);
  }, [onPress, value]);

  return (
    <Pressable onPress={handlePress} style={[styles.radio]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.controlOuter]}>
        {isChecked && (
          <View style={[styles.controlInner, styles.controlInnerChecked]} />
        )}
      </View>
    </Pressable>
  );
};

type Options = Record<string, string>;

interface Props extends ViewProps {
  onChange: (value: string) => void;
  options: Options;
  value: string;
}

const RadioGroup = (props: Props) => {
  const {value, onChange, options, ...viewProps} = props;
  return (
    <View {...viewProps} style={[styles.radioGroup, viewProps.style]}>
      {Object.keys(options).map(v => (
        <Radio
          isChecked={value === v}
          key={v}
          label={options[v]}
          onPress={onChange}
          value={v}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  controlInner: {
    borderRadius: 16 / 2,
    height: 16,
    width: 16,
  },
  controlInnerChecked: {
    backgroundColor: colors.primary,
  },
  controlOuter: {
    alignItems: 'center',
    borderColor: colors.primary,
    borderRadius: 24 / 2,
    borderWidth: 2,
    height: 24,
    justifyContent: 'center',
    marginLeft: 60,
    width: 24,
  },
  label: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  radio: {
    flexDirection: 'row',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default RadioGroup;
