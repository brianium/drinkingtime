import React from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableHighlightProps,
  StyleSheet,
} from 'react-native';
import colors from '../../lib/colors';
import * as styles from '../../lib/styles';

export enum DrinkType {
  Beer = 'beer',
  Liquor = 'liquor',
  Wine = 'wine',
}

export enum Size {
  Large = 'large',
  Small = 'small',
}

interface Props extends TouchableHighlightProps {
  type: DrinkType;
  size: Size;
}

const DrinkImage = (props: Props) => {
  const {type} = props;
  switch (type) {
    case DrinkType.Liquor: {
      return (
        <Image
          source={require('./src/Liquor.png')}
          style={[liquorStyles[props.size]]}
        />
      );
    }
    case DrinkType.Wine: {
      return (
        <Image
          source={require('./src/Wine.png')}
          style={[wineStyles[props.size]]}
        />
      );
    }
    default: {
      return (
        <Image
          source={require('./src/Beer.png')}
          style={[beerStyles[props.size]]}
        />
      );
    }
  }
};

const Drink = (props: Props) => {
  const drinkStyles = styles.merge(
    [highlightStyles.all, highlightStyles[props.size]],
    props.style,
  );
  return (
    <TouchableHighlight style={drinkStyles}>
      <DrinkImage {...props} />
    </TouchableHighlight>
  );
};

Drink.defaultProps = {
  size: Size.Small,
};

const beerStyles = StyleSheet.create({
  [Size.Large]: {
    height: 121.03,
    position: 'relative',
    right: 6,
    top: 6,
    width: 98.27,
  },
  [Size.Small]: {
    position: 'relative',
    right: 2,
    top: 1,
    height: 28,
    width: 23,
  },
});

const liquorStyles = StyleSheet.create({
  [Size.Small]: {
    height: 24,
    position: 'relative',
    top: 1,
    width: 22,
  },
  [Size.Large]: {
    height: 24,
    position: 'relative',
    top: 1,
    width: 22,
  },
});

const wineStyles = StyleSheet.create({
  [Size.Small]: {
    height: 28,
    position: 'relative',
    top: 2,
    width: 12,
  },
  [Size.Large]: {
    height: 28,
    position: 'relative',
    top: 2,
    width: 12,
  },
});

const highlightStyles = StyleSheet.create({
  all: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  [Size.Large]: {
    borderRadius: 103,
    height: 206,
    width: 206,
  },
  [Size.Small]: {
    borderRadius: 26,
    height: 52,
    width: 52,
  },
});

export default Drink;
