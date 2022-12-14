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
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  const handePress = () => console.log("Text pressed");
  // console.log(useDeviceOrientation());
  const {landscape} = useDeviceOrientation();
  return (
    // <SafeAreaView style={styles.container}>
      // {/* <Text numberOfLines={1} onPress={handePress}>Hello React Native!</Text>
      // <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
      //   <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
      //   <Image
      //     // blurRadius={10}
      //     fadeDuration={1000}
      //     source={{
      //       width: 200,
      //       height: 300,
      //       uri: "https://picsum.photos/200/300"
      //     }}
      //   />
      // </TouchableNativeFeedback> */}

      // {/* <Button
      //   color="orange"
      //   title="Click me"
      //   onPress={() =>
      //     // Alert.alert("My title", "Button tapped", [
      //     //   { text: "Yes", onPress: () => alert("Yes") },
      //     //   { text: "No", onPress: () => alert("No") },
      //     // ])
      //     Alert.prompt("My title", "My message", (text) => console.log(text))
      //   }
      // /> */}

      // <View style={{
      //   backgroundColor: 'dodgerblue',
      //   width: '100%',
      //   height: landscape ? '100%' : '30%',
      // }}></View>

      // <StatusBar style="auto" />
    // </SafeAreaView>
    // <View
    //   style={{
    //     backgroundColor: "#fff",
    //     flex: 1,
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     alignContent: "center", // only works when flexWrap is available
    //     flexWrap: "wrap"
    //   }}
    // >
    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: 100,
    //       height: 100,
    //       // alignSelf: "flex-start",
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: "gold",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: "tomato",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: "grey",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: "greenyellow",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    // </View>
    // <WelcomeScreen />
    <ViewImageScreen />
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
