import client from "./client";
import axios from "axios";

const endpoint = '/listings';
const getListings = () => client.get(endpoint);

const addListing = async listing => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image
  }));

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return await client.post(endpoint, JSON.stringify(data), { headers: {
    'Content-Type': 'multipart/form-data'
  } });
}

export default {
  addListing,
  getListings
}