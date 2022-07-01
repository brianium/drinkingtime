import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Text from '../Text';
import colors from '../../lib/colors';

export enum Type {
  Default = 'default',
  Danger = 'danger',
}

interface Props extends ViewProps {
  children: string;
  type?: Type;
}

const Info = (props: Props) => {
  const {type, children, ...viewProps} = props;
  return (
    <View
      {...viewProps}
      style={[
        styles.view,
        type === Type.Danger ? styles.dangerView : styles.defaultView,
        props.style,
      ]}>
      <Text
        style={[
          styles.text,
          type === Type.Danger ? styles.dangerText : styles.defaultText,
        ]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 20,
  },
  defaultText: {
    color: colors.infoDefaultText,
  },
  dangerText: {
    color: colors.infoDangerText,
  },
  view: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 12,
    width: '100%',
  },
  defaultView: {
    backgroundColor: colors.infoDefaultBg,
    borderColor: colors.primary,
  },
  dangerView: {
    backgroundColor: colors.infoDangerBg,
    borderColor: colors.danger,
  },
});

Info.defaultProps = {
  type: Type.Default,
};

export default Info;
