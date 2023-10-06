import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileAccount" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    {/* <Stack.Screen name="ListingEdit" component={ListingEditScreen} />
    <Stack.Screen name="Account" component={AccountScreen} /> */}
  </Stack.Navigator>
)

export default AccountNavigator;