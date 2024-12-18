import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL:
    "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const getAllCampers =
  createAsyncThunk(
    "campers/getAll",
    async (params, thunkAPI) => {
      try {
        const { data } =
          await instance.get(
            "/campers",
            { params },
          );
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message,
        );
      }
    },
  );

export const getCamperById =
  createAsyncThunk(
    "campers/getById",
    async (id, thunkAPI) => {
      try {
        const { data } =
          await instance.get(
            `/campers/${id}`,
          );
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message,
        );
      }
    },
  );
