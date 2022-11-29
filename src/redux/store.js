import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo/slice";

const store = configureStore({
  reducer: todoSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
