import { useEffect, useRef, useState } from "react";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import * as Device from 'expo-device';
import Constants from "expo-constants";

import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default useNotifications = (notificationResponseListener) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    // console.log("=====register push token======")
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });



    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    //   navigation.navigate('Account');
    // });
    if(notificationResponseListener) responseListener.current = Notifications.addNotificationResponseReceivedListener(notificationListener);

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
}