import { useState, useEffect, useRef } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants";
import expoPushTokensApi from "../api/expoPushTokens";
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotifications();
  // }, []);

  // const registerForPushNotifications = async () => {
  //   try {
  //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (!permission.granted) return;

  //     const token = await Notifications.getExpoPushTokenAsync({
  //       projectId: Constants.expoConfig.extra.eas.projectId,
  //     });
  //     expoPushTokensApi.register(token);
  //   } catch (error) {
  //     console.log('Error getting a push token', error)
  //   }
  // }

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    // console.log("=====register push token======")
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log("==============")
      console.log(notification)
      console.log("==============")
      setNotification(notification);
    });



    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // async function registerForPushNotificationsAsync() {
  //   let token;
  
  //   if (Platform.OS === 'android') {
  //     await Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }
  
  //   if (Device.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     // Learn more about projectId:
  //     // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
  //     token = (await Notifications.getExpoPushTokenAsync({ projectId: Constants.expoConfig?.extra?.eas.projectId })).data;
  //     console.log("token");
  //     console.log(token);
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }
  
  //   return token;
  // }

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

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync({ 'projectId': Constants.expoConfig?.extra?.eas.projectId })).data;
    expoPushTokensApi.register(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

export default AppNavigator;