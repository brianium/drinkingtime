// stories/Text.stories.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import TextInput, {Size, State} from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const LargeTextInput: ComponentStory<typeof TextInput> = args => (
  <SafeAreaView style={[styles.view]}>
    <TextInput {...args} />
  </SafeAreaView>
);

LargeTextInput.args = {
  label: 'Weight',
  unit: 'lbs',
  value: '193',
};

export const LargeTextInputWithMessage: ComponentStory<
  typeof TextInput
> = args => (
  <SafeAreaView style={[styles.view]}>
    <TextInput {...args} />
  </SafeAreaView>
);

LargeTextInputWithMessage.args = {
  label: 'Weight',
  unit: 'lbs',
  value: '193',
  message: 'Weight must be greater than 0',
  state: State.Default,
};

export const SmallTextInput: ComponentStory<typeof TextInput> = args => (
  <SafeAreaView style={[styles.view]}>
    <TextInput {...args} />
  </SafeAreaView>
);

SmallTextInput.args = {
  label: 'Volume',
  size: Size.Small,
  unit: 'oz',
  value: '12',
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
