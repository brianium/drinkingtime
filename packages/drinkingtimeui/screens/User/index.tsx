import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputEndEditingEventData,
  View,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import Info from '../../components/Info';
import RadioGroup from '../../components/RadioGroup';
import SafeAreaView from '../../components/SafeAreaView';
import Text from '../../components/Text';
import TextInput, {State as InputState} from '../../components/TextInput';
import Button from '../../components/Button';
import colors from '../../lib/colors';
import {withActionSheet} from '../withActionSheet';
import {useActionSheet} from '@expo/react-native-action-sheet';

type EventId = 'gender' | 'weight' | 'navigate';

type Event = [EventId, string];

export enum ScreenState {
  Default = 'default',
  Error = 'error',
  FirstVisit = 'first-visit',
}

interface Props {
  onButtonPress: () => void;
  onChange: (event: Event) => void;
  gender: 'male' | 'female';
  screenState?: ScreenState | undefined;
  weight: number;
}

const genderOptions = {
  male: 'Male',
  female: 'Female',
};

const actionOptions = ['Drink', 'Cancel'];
const cancelButtonIndex = 1;

const User = (props: Props) => {
  const {onChange, onButtonPress, gender, weight, screenState} = props;
  const {showActionSheetWithOptions} = useActionSheet();

  const handleChange = (id: EventId) => (value: string) =>
    onChange([id, value]);

  const handleEndEditing =
    (id: EventId) => (e: NativeSyntheticEvent<TextInputEndEditingEventData>) =>
      onChange([id, e.nativeEvent.text]);

  const handleMenuPress = (id: EventId) => () =>
    showActionSheetWithOptions(
      {
        options: actionOptions,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (typeof buttonIndex === 'number') {
          onChange([id, actionOptions[buttonIndex]]);
        }
      },
    );

  return (
    <SafeAreaView style={styles.view}>
      <AppHeader
        isMenuShown={screenState === ScreenState.Default}
        onPressMenu={handleMenuPress('navigate')}
      />
      {screenState === ScreenState.FirstVisit ? (
        <Info style={styles.info}>
          It looks like this is your first time getting lity city with Drinking
          Time! In order to properly calculate your blood alcohol content (BAC),
          we need to gather a little information about you first. We won’t use
          this information for anything other than calculating your BAC.
        </Info>
      ) : (
        <Text style={styles.text}>User settings</Text>
      )}
      <RadioGroup
        options={genderOptions}
        onChange={handleChange('gender')}
        style={[styles.radioGroup]}
        value={gender}
      />
      <TextInput
        label="Weight"
        message={
          screenState === ScreenState.Error
            ? 'Weight must be greater than 0'
            : undefined
        }
        state={
          screenState === ScreenState.Error
            ? InputState.Error
            : InputState.Default
        }
        onEndEditing={handleEndEditing('weight')}
        unit="lbs"
        value={`${weight}`}
      />
      <View style={styles.button}>
        <Button
          disabled={screenState === ScreenState.Error}
          onPress={onButtonPress}
          text="Start Drinking"
        />
      </View>
    </SafeAreaView>
  );
};

User.defaultProps = {
  screenState: ScreenState.Default,
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 83,
    width: '100%',
  },
  info: {
    marginTop: 54,
  },
  radioGroup: {
    marginBottom: 46,
    marginTop: 36,
  },
  text: {
    alignSelf: 'flex-start',
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  view: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withActionSheet(User);
