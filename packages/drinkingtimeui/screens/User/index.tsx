import React from 'react';
import {StyleSheet, View} from 'react-native';
import Info from '../../components/Info';
import RadioGroup from '../../components/RadioGroup';
import SafeAreaView from '../../components/SafeAreaView';
import Text, {TextStyle} from '../../components/Text';
import TextInput, {State as InputState} from '../../components/TextInput';
import Button from '../../components/Button';
import colors from '../../lib/colors';

type EventId = 'gender' | 'weight';

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

const User = (props: Props) => {
  const {onChange, onButtonPress, gender, weight, screenState} = props;

  const handleChange = (id: EventId) => (value: string) =>
    onChange([id, value]);

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.title} textStyle={TextStyle.Title}>
        Drinking Time
      </Text>
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
          screenState === ScreenState.Error && 'Weight must be greater than 0'
        }
        onChangeText={handleChange('weight')}
        state={
          screenState === ScreenState.Error
            ? InputState.Error
            : InputState.Default
        }
        unit="lbs"
        value={`${weight}`}
      />
      <View style={styles.button}>
        <Button text="Start Drinking" onPress={onButtonPress} />
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
  title: {
    color: colors.black,
    fontSize: 32,
    marginTop: 6,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 83,
  },
});

export default User;
