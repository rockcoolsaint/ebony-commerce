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
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {
  // const [firstName, setFirstName] = useState('');
  // const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      {/* <Text>{firstName}</Text>
      <TextInput
        maxLength={5}
        keyboardType="numeric"
        clearButtonMode='always'
        secureTextEntry={true}
        onChangeText={text => setFirstName(text)}
        placeholder='First Name'
        style={{
          borderBottomColor: "color",
          borderBottomWidth: 1,
        }}
      /> */}

      {/* <AppTextInput placeholder="Username" icon="email" /> */}

      {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}

      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} icon="apps" placeholder={"Category"} />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
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
