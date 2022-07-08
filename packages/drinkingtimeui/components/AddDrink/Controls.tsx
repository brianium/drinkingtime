import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Pressable, Animated, Easing} from 'react-native';
import {Drink as EventPayload} from './types';
import Drink, {DrinkType, Size, dimensions} from '../Drink';
import Text from '../Text';
import colors from '../../lib/colors';

function fadeIn(fade: Animated.Value) {
  return Animated.timing(fade, {
    toValue: 1,
    easing: Easing.ease,
    duration: 75,
    useNativeDriver: true,
  });
}

function translate(pos: Animated.Value, nextPos: number) {
  return Animated.timing(pos, {
    toValue: nextPos,
    easing: Easing.ease,
    duration: 75,
    useNativeDriver: true,
  });
}

function animate(...anims: Animated.CompositeAnimation[]) {
  Animated.sequence([Animated.parallel(anims)]).start();
}

interface Props {
  onPress: (type: EventPayload) => void;
}

interface ControlProps extends Props {
  abv: number;
  ounces: number;
  type: DrinkType;
}

const Control = ({abv, onPress, ounces, type}: ControlProps) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      onPress={() => onPress({type, abv, ounces})}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={styles.control}>
      <Text style={styles.controlTextSmall}>ABV: {abv}%</Text>
      <Drink style={pressed ? styles.controlPressed : null} type={type} />
      <Text style={styles.controlTextLarge}>
        {type.toUpperCase()}
        {' ('}
        {ounces}
        {'oz)'}
      </Text>
    </Pressable>
  );
};

const Controls = ({onPress}: Props) => {
  const left = useRef(new Animated.Value(dimensions[Size.Small])).current;
  const right = useRef(new Animated.Value(0)).current;
  const fadeLeft = useRef(new Animated.Value(0)).current;
  const fadeCenter = useRef(new Animated.Value(0)).current;
  const fadeRight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate(translate(left, -38), fadeIn(fadeLeft));
  }, [left, fadeLeft]);

  useEffect(() => {
    animate(translate(right, 38), fadeIn(fadeRight));
  }, [right, fadeRight]);

  useEffect(() => {
    fadeIn(fadeCenter).start();
  }, [fadeCenter]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeLeft,
          transform: [{perspective: 1000}, {translateX: left}],
        }}>
        <Control abv={5} onPress={onPress} ounces={12} type={DrinkType.Beer} />
      </Animated.View>
      <Animated.View style={{opacity: fadeCenter}}>
        <Control abv={12} onPress={onPress} ounces={5} type={DrinkType.Wine} />
      </Animated.View>
      <Animated.View
        style={{
          opacity: fadeRight,
          transform: [{perspective: 1000}, {translateX: right}],
        }}>
        <Control
          abv={40}
          onPress={onPress}
          ounces={1.5}
          type={DrinkType.Liquor}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    width: '100%',
  },
  control: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlPressed: {
    backgroundColor: colors.primaryDarker,
  },
  controlTextSmall: {
    color: '#A6A6A6',
    fontSize: 10,
    marginBottom: 5,
  },
  controlTextLarge: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 4,
  },
});

export default Controls;
