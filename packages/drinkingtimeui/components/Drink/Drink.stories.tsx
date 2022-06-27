// stories/Text.stories.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Drink, {DrinkType, Size} from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Drink',
  component: Drink,
} as ComponentMeta<typeof Drink>;

export const Beer: ComponentStory<typeof Drink> = args => (
  <SafeAreaView style={[styles.view]}>
    <Drink {...args} />
  </SafeAreaView>
);

Beer.args = {
  type: DrinkType.Beer,
  size: Size.Large,
};

export const Wine: ComponentStory<typeof Drink> = args => (
  <SafeAreaView style={[styles.view]}>
    <Drink {...args} />
  </SafeAreaView>
);

Wine.args = {
  type: DrinkType.Wine,
  size: Size.Small,
};

export const Liquor: ComponentStory<typeof Drink> = args => (
  <SafeAreaView style={[styles.view]}>
    <Drink {...args} />
  </SafeAreaView>
);

Liquor.args = {
  type: DrinkType.Liquor,
  size: Size.Small,
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
