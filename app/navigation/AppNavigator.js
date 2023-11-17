import { useState, useEffect, useRef } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';
// import Constants from "expo-constants";
// import expoPushTokensApi from "../api/expoPushTokens";
import { Text, View, Button, Platform } from 'react-native';
// import * as Device from 'expo-device';
import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  useNotifications()

  return (
    <>
      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Feed" component={FeedNavigator}
          options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='home' size={size} color={color} />
          }}
        />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='plus-circle' size={size} color={color} />
          })}
        />
        <Tab.Screen name="Account" component={AccountNavigator}
          options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='account' size={size} color={color} />
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default AppNavigator;