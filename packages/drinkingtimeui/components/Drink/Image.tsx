import React from 'react';
import {Image as BaseImage, View, ViewProps, StyleSheet} from 'react-native';
import {DrinkSize, DrinkType} from './types';
import colors from '../../lib/colors';
import * as styles from '../../lib/styles';

export const dimensions = {
  [DrinkSize.Small]: 52,
  [DrinkSize.Large]: 206,
};

interface Props extends ViewProps {
  type: DrinkType;
  size: DrinkSize;
}

const DrinkImage = (props: Props) => {
  const {type} = props;
  switch (type) {
    case DrinkType.Liquor: {
      return (
        <BaseImage
          source={require('./src/Liquor.png')}
          style={[liquorStyles[props.size]]}
        />
      );
    }
    case DrinkType.Wine: {
      return (
        <BaseImage
          source={require('./src/Wine.png')}
          style={[wineStyles[props.size]]}
        />
      );
    }
    default: {
      return (
        <BaseImage
          source={require('./src/Beer.png')}
          style={[beerStyles[props.size]]}
        />
      );
    }
  }
};

const Image = (props: Props) => {
  const drinkStyles = styles.merge(
    [viewStyles.all, viewStyles[props.size]],
    props.style,
  );
  return (
    <View style={drinkStyles}>
      <DrinkImage {...props} />
    </View>
  );
};

Image.defaultProps = {
  size: DrinkSize.Small,
};

const beerStyles = StyleSheet.create({
  [DrinkSize.Large]: {
    height: 121.03,
    position: 'relative',
    right: 6,
    top: 6,
    width: 98.27,
  },
  [DrinkSize.Small]: {
    position: 'relative',
    right: 2,
    top: 1,
    height: 28,
    width: 23,
  },
});

const liquorStyles = StyleSheet.create({
  [DrinkSize.Small]: {
    height: 24,
    position: 'relative',
    top: 1,
    width: 22,
  },
  [DrinkSize.Large]: {
    height: 24,
    position: 'relative',
    top: 1,
    width: 22,
  },
});

const wineStyles = StyleSheet.create({
  [DrinkSize.Small]: {
    height: 28,
    position: 'relative',
    top: 2,
    width: 12,
  },
  [DrinkSize.Large]: {
    height: 28,
    position: 'relative',
    top: 2,
    width: 12,
  },
});

const viewStyles = StyleSheet.create({
  all: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  [DrinkSize.Large]: {
    borderRadius: dimensions[DrinkSize.Large] / 2,
    height: dimensions[DrinkSize.Large],
    width: dimensions[DrinkSize.Large],
  },
  [DrinkSize.Small]: {
    borderRadius: dimensions[DrinkSize.Small] / 2,
    height: dimensions[DrinkSize.Small],
    width: dimensions[DrinkSize.Small],
  },
});

export default Image;
