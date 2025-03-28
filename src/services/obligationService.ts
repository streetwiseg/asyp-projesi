// src/services/obligationService.ts

import api from "@/lib/axios";
import { Obligation } from "@/types";

export const getObligations = async (): Promise<Obligation[]> => {
  const response = await api.get("/obligations");
  return response.data;
};

export const getObligationById = async (id: string): Promise<Obligation> => {
  const response = await api.get(`/obligations/${id}`);
  return response.data;
};

export const createObligation = async (data: Omit<Obligation, "id">): Promise<Obligation> => {
  const response = await api.post("/obligations", data);
  return response.data;
};

export const updateObligation = async (id: string, data: Partial<Omit<Obligation, "id">>): Promise<Obligation> => {
  const response = await api.put(`/obligations/${id}`, data);
  return response.data;
};

export const deleteObligation = async (id: string): Promise<void> => {
  await api.delete(`/obligations/${id}`);
};
