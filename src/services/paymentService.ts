// 📄 src/services/paymentService.ts

import axios from "axios";
import { Payment } from "@/types";
import { toast } from "@/components/ui/toaster";

/**
 * ✅ Ödeme Listesi Getir
 */
export const fetchPayments = async (): Promise<Payment[]> => {
    try {
        const response = await axios.get("/api/payments");
        return response.data;
    } catch (error) {
        toast.error("Ödemeler alınamadı");
        throw error;
    }
};

/**
 * ✅ Yeni Ödeme Ekle
 */
export const createPayment = async (data: Partial<Payment>): Promise<Payment> => {
    try {
        const response = await axios.post("/api/payments", data);
        toast.success("Ödeme başarıyla eklendi");
        return response.data;
    } catch (error) {
        toast.error("Ödeme eklenemedi");
        throw error;
    }
};

/**
 * ✅ Ödeme Sil
 */
export const deletePayment = async (paymentId: number): Promise<void> => {
    try {
        await axios.delete(`/api/payments/${paymentId}`);
        toast.success("Ödeme silindi");
    } catch (error) {
        toast.error("Ödeme silinemedi");
        throw error;
    }
};

/**
 * ✅ Ödeme Detayı Getir
 */
export const fetchPaymentById = async (paymentId: number): Promise<Payment> => {
    try {
        const response = await axios.get(`/api/payments/${paymentId}`);
        return response.data;
    } catch (error) {
        toast.error("Ödeme detayları alınamadı");
        throw error;
    }
};
