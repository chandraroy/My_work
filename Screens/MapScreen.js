import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapScreen(props) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      
        initialRegion={{
          latitude: 23.011442,
          longitude: 72.51061,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
