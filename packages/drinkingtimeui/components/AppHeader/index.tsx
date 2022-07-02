import React from 'react';
import {Pressable, View, ViewProps, StyleSheet} from 'react-native';
import Text, {TextStyle} from '../../components/Text';
import colors from '../../lib/colors';

interface Props extends ViewProps {
  isMenuShown?: boolean;
  onPressMenu: () => void;
}

const Menu = (props: Omit<Props, 'isMenuShown'>) => (
  <Pressable onPress={props.onPressMenu} style={styles.menu}>
    <View style={styles.dot} />
    <View style={[styles.dot, styles.dotMiddle]} />
    <View style={styles.dot} />
  </Pressable>
);

const AppHeader = (props: Props) => {
  const {isMenuShown, ...viewProps} = props;
  return (
    <View {...viewProps} style={[styles.view, props.style]}>
      {isMenuShown && <Menu {...props} />}
      <Text style={styles.title} textStyle={TextStyle.Title}>
        Drinking Time
      </Text>
    </View>
  );
};

AppHeader.defaultProps = {
  isMenuShown: true,
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: colors.darkGrey,
    borderRadius: 4 / 2,
    height: 4,
    width: 4,
  },
  dotMiddle: {
    marginVertical: 6,
  },
  menu: {
    position: 'absolute',
    right: 0,
    flexDirection: 'column',
  },
  title: {
    color: colors.black,
    fontSize: 32,
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
    width: '100%',
  },
});

export default AppHeader;
