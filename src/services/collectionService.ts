// 📄 src/services/collectionService.ts

import api from "@/lib/axios";
import { Collection } from "@/types";

/**
 * ✅ Tüm tahsilatları getirir
 */
export async function getAllCollections(): Promise<Collection[]> {
  const response = await api.get("/collections");
  return response.data;
}

/**
 * ✅ Tekil tahsilat getirir
 */
export async function getCollectionById(id: string): Promise<Collection> {
  const response = await api.get(`/collections/${id}`);
  return response.data;
}

/**
 * ✅ Yeni tahsilat oluşturur
 */
export async function createCollection(data: Partial<Collection>): Promise<Collection> {
  const response = await api.post("/collections", data);
  return response.data;
}

/**
 * ✅ Tahsilat günceller
 */
export async function updateCollection(id: string, data: Partial<Collection>): Promise<Collection> {
  const response = await api.put(`/collections/${id}`, data);
  return response.data;
}

/**
 * ✅ Tahsilat siler
 */
export async function deleteCollection(id: string): Promise<void> {
  await api.delete(`/collections/${id}`);
}
