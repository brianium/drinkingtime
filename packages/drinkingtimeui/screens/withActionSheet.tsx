import React from 'react';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

export function withActionSheet<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <ActionSheetProvider>
      <Component {...props} />
    </ActionSheetProvider>
  );
}
