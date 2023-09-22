import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import styles from './styles';

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default AppText;