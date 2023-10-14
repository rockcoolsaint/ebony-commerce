import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  // console.log(getListingsApi)

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  // const loadListings = async () => {
  //   setLoading(true);
  //   const response = await listingsApi.getListings();
  //   setLoading(false);

  //   if (!response.ok) return setError(true);

  //   setError(false);
  //   setListings(response.data);
  // }

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && <>
        <AppText>Couldn't retrieve the listings.</AppText>
        <AppButton title="Retry" onPress={getListingsApi.request} />
      </>}
      {/* <ActivityIndicator animating={true} size="large" /> */}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;