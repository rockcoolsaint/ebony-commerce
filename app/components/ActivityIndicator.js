import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    opacity: 0.8,
    width: '100%',
    zIndex: 1
  }
})

export default ActivityIndicator;