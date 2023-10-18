import { useEffect } from "react";
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
import { Constants } from "expo-constants";
import expoPushTokensApi from "../api/expoPushTokens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log('Error getting a push token', error)
    }
  }

  return (
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
  )
}

export default AppNavigator;