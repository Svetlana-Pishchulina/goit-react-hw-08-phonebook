import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import pnotify from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      // pnotify.error({
      //   text: "something gone wrong",
      //   mode: "light",
      //   closer: true,
      //   sticker: false,
      //   hide: true,
      //   delay: 2000,
      // });
      alert("something gone wrong");
      return thunkAPI.rejectWithValue();
      // console.log(error.response.status);
      // return error.message;
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.response.status);
    alert("something gone wrong");
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/login");
    token.unset();
  } catch (error) {
    return error.message;
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export default { register, logIn, logOut, fetchCurrentUser };
