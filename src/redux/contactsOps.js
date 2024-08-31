import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66cf1b45901aab248420ec7a.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  };
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { ...user });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
