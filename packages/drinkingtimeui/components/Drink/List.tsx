import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ViewProps,
  ListRenderItem,
} from 'react-native';
import ListItem from './ListItem';
import {ConsumedDrink} from './types';
import colors from '../../lib/colors';

interface Props extends ViewProps {
  drinks: ConsumedDrink[];
}

const List = (props: Props) => {
  const {drinks, ...viewProps} = props;
  const renderItem: ListRenderItem<ConsumedDrink> = ({item, index}) => (
    <ListItem
      drink={item}
      style={[styles.item, index > 0 ? styles.borderedItem : null]}
    />
  );
  return (
    <View {...viewProps} style={[styles.container, props.style]}>
      <FlatList data={drinks} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  item: {
    paddingVertical: 20,
  },
  borderedItem: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
  },
});

export default List;
