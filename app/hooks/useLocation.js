import { getLastKnownPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import { useEffect, useState } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) return;
      const { coords: { latitude, longitude } } = await getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation();
  }, [])

  return location;
};