import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { ErrorMessage, AppForm as Form, AppFormField as FormField, SubmitButton } from "../components/forms";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken.token);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="firstname"
            placeholder="FirstName"
          />
          <FormField
            autoCorrect={false}
            icon="account"
            name="lastname"
            placeholder="LastName"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;