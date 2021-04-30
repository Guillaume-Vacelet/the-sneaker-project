import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import SneakerCard from '../../../components/SneakerCard';
import UserProductsContext from '../../../core/contexts/UserProductsContext';

export default function PopularTab() {
  const userProducts = React.useContext(UserProductsContext);

  return (
    <View style={styles.rootContainer}>
      {userProducts
        ? (<FlatGrid
            data={userProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SneakerCard item={item} hasBeenChecked={false} />
            )}
            itemDimension={150}
            spacing={10}
          />)
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    padding: 20,
    color: "black",
  },
});