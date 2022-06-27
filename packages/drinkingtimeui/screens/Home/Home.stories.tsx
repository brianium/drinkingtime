// stories/Home.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Home from '.';

export default {
  title: 'screens/Home',
  component: Home,
  argTypes: {
    onButtonPress: {action: 'pressed'},
  },
} as ComponentMeta<typeof Home>;

export const HomeScreen: ComponentStory<typeof Home> = args => (
  <Home {...args} />
);

HomeScreen.args = {};
