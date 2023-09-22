// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Alert,
  Button,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText/AppText';

export default function App() {
  const handePress = () => console.log("Text pressed");
  // console.log(useDeviceOrientation());
  const {landscape} = useDeviceOrientation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <MaterialCommunityIcons name='email' size={200} color="dodgerblue" />
      <AppText>I love React Native!</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
