import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppHeader from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/AppHeader',
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

export const DefaultAppHeader: ComponentStory<typeof AppHeader> = args => (
  <SafeAreaView style={[styles.view]}>
    <AppHeader {...args} />
  </SafeAreaView>
);

DefaultAppHeader.args = {};

export const AppHeaderNoMenu: ComponentStory<typeof AppHeader> = args => (
  <SafeAreaView style={[styles.view]}>
    <AppHeader {...args} />
  </SafeAreaView>
);

AppHeaderNoMenu.args = {
  isMenuShown: false,
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
