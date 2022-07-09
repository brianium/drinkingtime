import React from 'react';
import Button from './Button';
import Controls from './Controls';
import {Drink} from '../Drink';

type PressEvent = ['add', Drink] | ['focus', boolean];

interface Props {
  isFocused: boolean;
  onPress: (e: PressEvent) => void;
}

const AddDrink = ({isFocused, onPress}: Props) => {
  if (isFocused) {
    return <Controls onPress={(drink: Drink) => onPress(['add', drink])} />;
  }
  return <Button onPress={() => onPress(['focus', true])} />;
};

export default AddDrink;
