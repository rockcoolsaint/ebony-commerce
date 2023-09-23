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
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100
    // }}>
    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>

    <ListingDetailsScreen />
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
