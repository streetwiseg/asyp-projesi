// 📄 src/store/index.ts

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
import packageReducer from "./packageslice";
// 🚩 gelecekte buraya importlar eklenecek
// import contractReducer from "./contractslice";
// import reportReducer from "./reportslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    packages: packageReducer,
    // contracts: contractReducer,
    // reports: reportReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // JWT, File, FormData gibi objelerde hata verme
    }),
  devTools: import.meta.env.MODE !== "production", // prod da devtools kapalı
});

// 🚩 Global Type'lar
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
