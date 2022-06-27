import {StyleProp} from 'react-native';

export function merge(base: StyleProp<unknown>, style?: StyleProp<unknown>) {
  let styles = Array.isArray(base) ? base : [base];
  if (style) {
    if (Array.isArray(style)) {
      styles = styles.concat(style);
    } else {
      styles.push(style);
    }
  }
  return styles;
}
