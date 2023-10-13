import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import AnimatedLottieView from 'lottie-react-native';

import Text from '../components/AppText';
import colors from '../config/colors';

function UploadScreen({onDone, progress = 0, visible = false}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.primary} progress={progress} width={200} />
        ) : (
          <AnimatedLottieView
            autoPlay
            loop={false}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  animation: {
    width: 150
  }
})

export default UploadScreen;