import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';
import colors from '../../lib/colors';

export enum Type {
  Default = 'default',
  Danger = 'danger',
}

interface Props {
  children: string;
  type?: Type;
}

const Info = (props: Props) => {
  const viewStyles = [styles.view];
  const textStyles = [styles.text];

  switch (props.type) {
    case Type.Danger: {
      viewStyles.push(styles.dangerView);
      textStyles.push(styles.dangerText);
      break;
    }
    default: {
      viewStyles.push(styles.defaultView);
      textStyles.push(styles.defaultText);
    }
  }

  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{props.children}</Text>
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
