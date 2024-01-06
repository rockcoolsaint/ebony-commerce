import axios from "axios"
import { create } from "apisauce";
import cache from "../../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";

// hosted url
const apiClient = create({
  baseURL: settings.apiUrl,
});

// development
// const apiClient = create({
//   baseURL: 'https://fakestoreapi.com',
// });

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = cache.get(url);
  return data ? { ok: true, data } : response;
}

export default apiClient;