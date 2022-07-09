import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Image from './Image';
import {DrinkType, DrinkSize} from './types';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Drink/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

export const Beer: ComponentStory<typeof Image> = args => (
  <SafeAreaView style={[styles.view]}>
    <Image {...args} />
  </SafeAreaView>
);

Beer.args = {
  type: DrinkType.Beer,
  size: DrinkSize.Large,
};

export const Wine: ComponentStory<typeof Image> = args => (
  <SafeAreaView style={[styles.view]}>
    <Image {...args} />
  </SafeAreaView>
);

Wine.args = {
  type: DrinkType.Wine,
  size: DrinkSize.Small,
};

export const Liquor: ComponentStory<typeof Image> = args => (
  <SafeAreaView style={[styles.view]}>
    <Image {...args} />
  </SafeAreaView>
);

Liquor.args = {
  type: DrinkType.Liquor,
  size: DrinkSize.Small,
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
