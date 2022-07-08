import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
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

type ChangeEventId = 'gender' | 'weight';

type ChangeEvent = [ChangeEventId, string];

export enum ScreenState {
  Default = 'default',
  Error = 'error',
}

const actionOptions = ['Drink', 'Cancel'];
const cancelButtonIndex = 1;

interface Props {
  gender: 'male' | 'female';
  isFirstVisit?: boolean;
  onButtonPress: () => void;
  onChange: (event: ChangeEvent) => void;
  onNavigate: (id: typeof actionOptions[number]) => void;
  screenState?: ScreenState | undefined;
  weight: number;
}

const genderOptions = {
  male: 'Male',
  female: 'Female',
};

const User = (props: Props) => {
  const {
    onChange,
    onNavigate,
    onButtonPress,
    gender,
    weight,
    screenState,
    isFirstVisit,
  } = props;
  const {showActionSheetWithOptions} = useActionSheet();

  const handleChange = (id: ChangeEventId) => (value: string) =>
    onChange([id, value]);

  const handleMenuPress = () =>
    showActionSheetWithOptions(
      {
        options: actionOptions,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (typeof buttonIndex === 'number') {
          onNavigate(actionOptions[buttonIndex]);
        }
      },
    );

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <SafeAreaView style={styles.view}>
        <AppHeader
          isMenuShown={screenState === ScreenState.Default && !isFirstVisit}
          onPressMenu={handleMenuPress}
        />
        {isFirstVisit ? (
          <Info style={styles.info}>
            It looks like this is your first time getting lity city with
            Drinking Time! In order to properly calculate your blood alcohol
            content (BAC), we need to gather a little information about you
            first. We won’t use this information for anything other than
            calculating your BAC.
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
          keyboardType="numeric"
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
          onChangeText={handleChange('weight')}
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
    </KeyboardAvoidingView>
  );
};

User.defaultProps = {
  isFirstVisit: false,
  screenState: ScreenState.Default,
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 83,
    width: '100%',
  },
  container: {
    flex: 1,
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
