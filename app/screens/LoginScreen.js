import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import {ErrorMessage, AppForm, AppFormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data.token);
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Username"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})

export default LoginScreen;