// 📄 src/services/reportService.ts

import api from "@/lib/axios";
import { Report } from "@/types";

/**
 * Belirli bir tarih aralığındaki raporları getirir.
 * @param startDate - Başlangıç tarihi (ISO string)
 * @param endDate - Bitiş tarihi (ISO string)
 */
export const getReports = async (startDate: string, endDate: string): Promise<Report[]> => {
  const response = await api.get<Report[]>("/reports", {
    params: { startDate, endDate },
  });
  return response.data;
};

/**
 * Yeni bir rapor oluşturur.
 * @param data - Rapor verileri
 */
export const createReport = async (data: Partial<Report>): Promise<Report> => {
  const response = await api.post<Report>("/reports", data);
  return response.data;
};

/**
 * Raporu ID ile getirir.
 * @param reportId - Rapor ID
 */
export const getReportById = async (reportId: string): Promise<Report> => {
  const response = await api.get<Report>(`/reports/${reportId}`);
  return response.data;
};

/**
 * Raporu günceller.
 * @param reportId - Rapor ID
 * @param data - Güncellenecek alanlar
 */
export const updateReport = async (reportId: string, data: Partial<Report>): Promise<Report> => {
  const response = await api.put<Report>(`/reports/${reportId}`, data);
  return response.data;
};

/**
 * Raporu siler.
 * @param reportId - Rapor ID
 */
export const deleteReport = async (reportId: string): Promise<void> => {
  await api.delete(`/reports/${reportId}`);
};
