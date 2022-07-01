// stories/Home.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import User, {ScreenState} from '.';

export default {
  title: 'screens/User',
  component: User,
  argTypes: {
    onButtonPress: {action: 'pressed'},
    onChange: {action: 'changed'},
  },
} as ComponentMeta<typeof User>;

export const DefaultUserScreen: ComponentStory<typeof User> = args => (
  <User {...args} />
);

DefaultUserScreen.args = {
  gender: 'male',
  weight: 193,
};

export const FirstVisitUserScreen: ComponentStory<typeof User> = args => (
  <User {...args} />
);

FirstVisitUserScreen.args = {
  gender: 'male',
  weight: 193,
  screenState: ScreenState.FirstVisit,
};

export const ErrorUserScreen: ComponentStory<typeof User> = args => (
  <User {...args} />
);

ErrorUserScreen.args = {
  gender: 'male',
  weight: 0,
  screenState: ScreenState.Error,
};
