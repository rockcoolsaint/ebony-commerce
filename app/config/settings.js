import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: 'https://fakestoreapi.com'
  },
  stanging: {
    apiUrl: 'https://fakestoreapi.com'
  },
  prod: {
    apiUrl: 'https://fakestoreapi.com'
  }
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.stanging;
  return settings.prod;
}

export default getCurrentSettings();