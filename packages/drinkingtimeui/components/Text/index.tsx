import React from 'react';
import {Text as BaseText, StyleSheet, TextProps} from 'react-native';
import * as styles from '../../lib/styles';

export enum TextStyle {
  Text = 'text',
  Title = 'title',
}

export interface Props extends TextProps {
  textStyle?: TextStyle;
}

const textStyles = StyleSheet.create({
  text: {
    fontFamily: 'Inria Sans',
  },
  title: {
    fontFamily: 'Abril Fatface',
  },
});

const Text = (props: Props) => {
  const {textStyle} = props;
  const style = styles.merge(
    [textStyle === TextStyle.Title ? textStyles.title : textStyles.text],
    props.style,
  );
  return <BaseText {...props} style={style} />;
};

export default Text;
