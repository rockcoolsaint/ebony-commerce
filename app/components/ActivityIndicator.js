import AnimatedLottieView from 'lottie-react-native';
import React from 'react';

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return <AnimatedLottieView
    autoPlay
    loop
    source={require('../assets/animations/loader.json')}
  />;
}

export default ActivityIndicator;