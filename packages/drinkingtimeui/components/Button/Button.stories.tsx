// stories/Button.stories.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed'},
  },
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <SafeAreaView style={[styles.view]}>
    <Button {...args} />
  </SafeAreaView>
);

Basic.args = {
  text: 'Start Drinking',
};

export const DisabledButton: ComponentStory<typeof Button> = args => (
  <SafeAreaView style={[styles.view]}>
    <Button {...args} />
  </SafeAreaView>
);

DisabledButton.args = {
  disabled: true,
  text: 'Start Drinking',
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
