import React from 'react';
import {SafeAreaView as BaseView, ViewProps, StyleSheet} from 'react-native';
import * as styles from '../../lib/styles';

const SafeAreaView = (props: ViewProps) => {
  const style = styles.merge([viewStyles.view], props.style);
  return <BaseView {...props} style={style} />;
};

const viewStyles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default SafeAreaView;
