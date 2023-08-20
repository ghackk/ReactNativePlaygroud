import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const App = () => {
  const [animation] = useState(new Animated.Value(1));

  const inflateBalloon = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={inflateBalloon}>
        <Animated.View style={[styles.balloon, { transform: [{ scale: animation }] }]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90f990',
  },
  balloon: {
    width: 120,
    height: 145,
    backgroundColor: '#fcfcfc',
    borderRadius: 50,
    shadowColor: '#012',
    shadowOffset: {
      width: 0,
      height: 10
    },
    animation: {
      name: 'balloons',
      duration: 10000,
      easing: 'ease-in-out',
      iterations: Infinity
    }
  },
});
export default App;
