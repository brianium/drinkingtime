import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import List from './List';
import {DrinkType} from './types';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Drink/List',
  component: List,
} as ComponentMeta<typeof List>;

export const BasicList: ComponentStory<typeof List> = args => (
  <SafeAreaView style={[styles.view]}>
    <List {...args} />
  </SafeAreaView>
);

const now = new Date();

BasicList.args = {
  drinks: [
    {
      consumedAt: now,
      type: DrinkType.Beer,
      abv: 5,
      ounces: 12,
    },
    {
      consumedAt: now,
      type: DrinkType.Wine,
      abv: 12,
      ounces: 5,
    },
    {
      consumedAt: now,
      type: DrinkType.Liquor,
      abv: 40,
      ounces: 1.5,
    },
  ],
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
