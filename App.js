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
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './app/components/OfflineNotice';

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

  const Link = () => {
    const navigation = useNavigation();
    return (
      <Button
        title="Click"
        onPress={() => navigation.navigate("TweetDetails")}
      />
    );
  }

  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", {id: 1})}
      />
      {/* <Link /> */}
    </Screen>
  )

  const TweetDetails = ({route}) => (
    <Screen>
      <Text>Tweets Details {route.params.id}</Text>
    </Screen>
  )

  const Stack = createNativeStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name='Tweets'
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: false
        }}
      />
      <Stack.Screen
        name='TweetDetails'
        component={TweetDetails}
        options={({route}) => ({ title: JSON.stringify(route.params.id) })}
      />
    </Stack.Navigator>
  )
  const Account = () => <Screen><Text>Account</Text></Screen>
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black"
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        // options={{
        //   tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='home' size={size} color={color} />
        // }}
      />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  )

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <StackNavigator /> */}
        {/* <TabNavigator/> */}
        <AuthNavigator />
        {/* <AppNavigator/> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );

  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }))
  //     const value = await AsyncStorage.getItem('person');
  //     const person = JSON.parse(value);
  //     console.log(person)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // demo()
  // return null;
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
