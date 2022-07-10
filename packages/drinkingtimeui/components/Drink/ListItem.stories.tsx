import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ListItem from './ListItem';
import {DrinkType} from './types';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Drink/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

export const Beer: ComponentStory<typeof ListItem> = args => (
  <SafeAreaView style={[styles.view]}>
    <ListItem {...args} />
  </SafeAreaView>
);

const now = new Date();
const yesterday = new Date(+now - 1000 * 60 * 60 * 24);

Beer.args = {
  drink: {
    consumedAt: now,
    type: DrinkType.Beer,
    abv: 5,
    ounces: 12,
  },
};

export const BeerOnDifferentDay: ComponentStory<typeof ListItem> = args => (
  <SafeAreaView style={[styles.view]}>
    <ListItem {...args} />
  </SafeAreaView>
);

BeerOnDifferentDay.args = {
  drink: {
    consumedAt: yesterday,
    type: DrinkType.Beer,
    abv: 5,
    ounces: 12,
  },
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
