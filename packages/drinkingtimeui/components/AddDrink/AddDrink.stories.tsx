import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import AddDrink from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/AddDrink',
  component: AddDrink,
  argTypes: {
    onPress: {action: 'pressed'},
  },
} as ComponentMeta<typeof AddDrink>;

export const DefaultState: ComponentStory<typeof AddDrink> = args => (
  <SafeAreaView style={[styles.view]}>
    <AddDrink {...args} />
  </SafeAreaView>
);

DefaultState.args = {
  isFocused: false,
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
