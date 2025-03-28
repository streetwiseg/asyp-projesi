// 📄 src/store/packageslice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Paket Özelliği tipi
export interface PackageFeature {
  id: string;
  name: string;
  isActive: boolean;
}

// Paket State
interface PackageState {
  packageName: string;
  features: PackageFeature[];
}

// İlk Değer
const initialState: PackageState = {
  packageName: "", // 🚩 artık backend'den gelecek
  features: [], // 🚩 backend'den doldurulacak
};

// Slice
export const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    // Paket ve özelliklerini set et
    setPackage: (
      state,
      action: PayloadAction<{ packageName: string; features: PackageFeature[] }>
    ) => {
      state.packageName = action.payload.packageName;
      state.features = action.payload.features;
    },

    // Özelliği aktif/pasif yap
    toggleFeature: (state, action: PayloadAction<string>) => {
      const feature = state.features.find((f) => f.id === action.payload);
      if (feature) feature.isActive = !feature.isActive;
    },

    // Tüm paket bilgilerini sıfırla (örn: logout sonrası)
    resetPackage: (state) => {
      state.packageName = "";
      state.features = [];
    },
  },
});

// Actions
export const { setPackage, toggleFeature, resetPackage } = packageSlice.actions;

// Reducer
export default packageSlice.reducer;
