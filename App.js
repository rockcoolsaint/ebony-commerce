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
  Dimensions,
  TextInput,
  Switch
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Screen from './app/components/Screen';
import { useEffect, useState } from 'react';
// import AppTextInput from './app/components/AppTextInput';
// import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from 'expo-permissions';
import ImageInputList from './app/components/ImageInputList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ]

export default function App() {
  // const [firstName, setFirstName] = useState('');
  // const [isNew, setIsNew] = useState(false);
  // const [category, setCategory] = useState();
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = uri => {
  //   setImageUris([...imageUris, uri]);
  // }

  // const handleRemove = uri => {
  //   setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  // }

  const Tweets = () => (
    <Screen>
      <Text>Tweets</Text>
    </Screen>
  )

  const TweetDetails = () => (
    <Screen>
      <Text>Tweets Details</Text>
    </Screen>
  )

  const Stack = createNativeStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name='Tweets' component={Tweets} />
      <Stack.Screen name='TweetDetails' component={TweetDetails} />
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//   },
// });
