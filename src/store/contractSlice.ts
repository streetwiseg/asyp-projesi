// src/store/contractSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contract } from "@/types";

interface ContractState {
  contracts: Contract[];
}

const initialState: ContractState = {
  contracts: [],
};

export const contractSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    setContracts: (state, action: PayloadAction<Contract[]>) => {
      state.contracts = action.payload;
    },
    addContract: (state, action: PayloadAction<Contract>) => {
      state.contracts.push(action.payload);
    },
    updateContract: (state, action: PayloadAction<Contract>) => {
      const index = state.contracts.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.contracts[index] = action.payload;
      }
    },
    removeContract: (state, action: PayloadAction<string>) => {
      state.contracts = state.contracts.filter((c) => c.id !== action.payload);
    },
  },
});

export const {
  setContracts,
  addContract,
  updateContract,
  removeContract,
} = contractSlice.actions;

export default contractSlice.reducer;
