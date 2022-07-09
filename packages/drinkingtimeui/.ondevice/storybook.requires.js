/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

// temporary fix for https://github.com/storybookjs/react-native/issues/327 whilst the issue is investigated
try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require("../components/AddDrink/AddDrink.stories.tsx"),
    require("../components/AppHeader/AppHeader.stories.tsx"),
    require("../components/Button/Button.stories.tsx"),
    require("../components/Drink/Image.stories.tsx"),
    require("../components/Info/Info.stories.tsx"),
    require("../components/Link/Link.stories.tsx"),
    require("../components/RadioGroup/RadioGroup.stories.tsx"),
    require("../components/Text/Text.stories.tsx"),
    require("../components/TextInput/TextInput.stories.tsx"),
    require("../screens/Home/Home.stories.tsx"),
    require("../screens/User/User.stories.tsx"),
  ];
};

configure(getStories, module, false);
