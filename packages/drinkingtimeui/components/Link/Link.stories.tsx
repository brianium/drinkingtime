import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Link from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Link',
  component: Link,
  argTypes: {
    onPress: {action: 'pressed'},
  },
} as ComponentMeta<typeof Link>;

export const BasicLink: ComponentStory<typeof Link> = args => (
  <SafeAreaView style={styles.view}>
    <Link {...args} />
  </SafeAreaView>
);

BasicLink.args = {
  children: "I'm done drinking",
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
