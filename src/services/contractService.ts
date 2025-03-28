// 📄 src/services/contractService.ts

import axios from "axios";
import { Contract, ContractAnalysis, Obligation, Payment, Collection } from "@/types";
import { toast } from "@/components/ui/toaster";

/**
 * ✅ Tüm Sözleşmeleri Listele
 */
export const fetchContracts = async (): Promise<Contract[]> => {
    try {
        const response = await axios.get("/api/contracts");
        return response.data;
    } catch (error) {
        toast.error("Sözleşmeler alınamadı");
        throw error;
    }
};

/**
 * ✅ Sözleşme Detayını Getir
 */
export const fetchContractById = async (contractId: number): Promise<Contract> => {
    try {
        const response = await axios.get(`/api/contracts/${contractId}`);
        return response.data;
    } catch (error) {
        toast.error("Sözleşme detayları alınamadı");
        throw error;
    }
};

/**
 * ✅ Yeni Sözleşme Ekle
 */
export const createContract = async (formData: FormData): Promise<Contract> => {
    try {
        const response = await axios.post("/api/contracts", formData);
        toast.success("Sözleşme başarıyla eklendi");
        return response.data;
    } catch (error) {
        toast.error("Sözleşme eklenemedi");
        throw error;
    }
};

/**
 * ✅ Sözleşme Analizi Kaydet
 */
export const saveContractAnalysis = async (contractId: number, analysisData: ContractAnalysis): Promise<any> => {
    try {
        const response = await axios.post(`/api/contracts/${contractId}/analysis`, analysisData);
        toast.success("Analiz kaydedildi");
        return response.data;
    } catch (error) {
        toast.error("Analiz kaydedilemedi");
        throw error;
    }
};

/**
 * ✅ Sözleşme Analiz Geçmişi
 */
export const fetchContractAnalysisHistory = async (contractId: number): Promise<ContractAnalysis[]> => {
    try {
        const response = await axios.get(`/api/contracts/${contractId}/analysis-history`);
        return response.data;
    } catch (error) {
        toast.error("Analiz geçmişi alınamadı");
        throw error;
    }
};

/**
 * ✅ Aylık Sözleşme İstatistikleri
 */
export const fetchMonthlyContractStats = async () => {
    try {
        const response = await axios.get("/api/contracts/monthly-stats");
        return response.data;
    } catch (error) {
        toast.error("İstatistikler alınamadı");
        throw error;
    }
};
