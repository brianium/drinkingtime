// stories/Text.stories.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Text, {TextStyle} from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const BasicText: ComponentStory<typeof Text> = args => (
  <SafeAreaView style={styles.view}>
    <Text {...args} />
  </SafeAreaView>
);

BasicText.args = {
  children: 'Start Drinking',
};

export const TitleText: ComponentStory<typeof Text> = args => (
  <SafeAreaView style={styles.view}>
    <Text {...args} />
  </SafeAreaView>
);

TitleText.args = {
  children: 'Drinking Time',
  textStyle: TextStyle.Title,
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
