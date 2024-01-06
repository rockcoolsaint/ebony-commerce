import client from "./client";

const endpoint = '/products?limit=10';
const getListings = () => client.get(endpoint);

const addListing = async (listing, onUploadProgress) => {
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

  return await client.post(endpoint, data, {
    headers: { "Content-Type": "multipart/form-data" },
    // transformRequest: [(data, headers) => {
    //   return data
    // }],
    onUploadProgress: progress =>
      onUploadProgress(progress.loaded / progress.total),
  });
}

export default {
  addListing,
  getListings
}