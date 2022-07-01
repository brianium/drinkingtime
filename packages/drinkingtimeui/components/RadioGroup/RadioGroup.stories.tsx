// stories/Button.stories.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import RadioGroup from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    onChange: {action: 'changed'},
  },
} as ComponentMeta<typeof RadioGroup>;

export const BasicRadioGroup: ComponentStory<typeof RadioGroup> = args => (
  <SafeAreaView style={[styles.view]}>
    <RadioGroup {...args} />
  </SafeAreaView>
);

BasicRadioGroup.args = {
  options: {
    male: 'Male',
    female: 'Female',
  },
  value: 'male',
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
