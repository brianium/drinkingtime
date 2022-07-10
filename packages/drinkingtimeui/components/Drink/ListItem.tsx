import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';
import Image from './Image';
import {ConsumedDrink, DrinkSize} from './types';
import Text from '../Text';
import colors from '../../lib/colors';

interface Props extends ViewProps {
  drink: ConsumedDrink;
}

function format(d: Date): string {
  const isDifferentDay = d.toDateString() !== new Date().toDateString();

  const result = Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(d);

  if (!isDifferentDay) {
    return `${result}`;
  }

  const day = Intl.DateTimeFormat('en', {
    weekday: 'short',
  }).format(d);

  return `${day} ${result}`;
}

const ListItem = (props: Props) => (
  <View style={[styles.view, props.style]}>
    <View style={styles.drink}>
      <Image size={DrinkSize.Small} type={props.drink.type} />
      <View style={styles.textView}>
        <Text style={styles.textLarge}>
          {props.drink.type}
          {' ('}
          {props.drink.ounces}
          {')'}
        </Text>
        <Text style={styles.textSmall}>ABV: {props.drink.abv} %</Text>
      </View>
    </View>
    <Text style={[styles.textSmall, styles.textDate]}>
      {format(props.drink.consumedAt)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  drink: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },
  textView: {
    flexDirection: 'column',
    marginLeft: 11,
  },
  textSmall: {
    color: '#A6A6A6',
    fontSize: 10,
  },
  textLarge: {
    textTransform: 'uppercase',
    color: colors.grey,
    fontSize: 12,
    marginBottom: 5,
  },
  textDate: {
    marginBottom: 25,
  },
});

export default ListItem;
