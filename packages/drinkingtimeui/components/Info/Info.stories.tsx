import React from 'react';
import {StyleSheet} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Info, {Type} from './';
import SafeAreaView from '../SafeAreaView';

export default {
  title: 'components/Info',
  component: Info,
} as ComponentMeta<typeof Info>;

export const BasicInfo: ComponentStory<typeof Info> = args => (
  <SafeAreaView style={[styles.view]}>
    <Info {...args} />
  </SafeAreaView>
);

BasicInfo.args = {
  children:
    'It looks like this is your first time getting lity city with Drinking Time! In order to properly calculate your blood alcohol content (BAC), we need to gather a little information about you first. We won’t use this information for anything other than calculating your BAC.',
};

export const DangerInfo: ComponentStory<typeof Info> = args => (
  <SafeAreaView style={[styles.view]}>
    <Info {...args} />
  </SafeAreaView>
);

DangerInfo.args = {
  children: 'If you drive now.... you are breaking the law fo sho',
  type: Type.Danger,
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
