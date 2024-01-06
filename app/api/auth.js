import client from "./client";

const login = (username, password) => client.post('/auth/login', JSON.stringify({ username: "johnd", password: "m38rmF$" }));

export default {
  login
};