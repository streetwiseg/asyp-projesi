// src/pages/contracts/assign.tsx

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/toaster";

const assignSchema = z.object({
  contractId: z.string().min(1, "Sözleşme ID gerekli"),
  userEmail: z.string().email("Geçerli bir e-posta girin"),
  note: z.string().optional(),
});

type AssignFormData = z.infer<typeof assignSchema>;

const AssignContractPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AssignFormData>({
    resolver: zodResolver(assignSchema),
  });

  const onSubmit = (data: AssignFormData) => {
    // Geliştirme: burada API’ye gönderim yapılacak
    console.log("✅ Sözleşme Atandı:", data);
    toast.success("Sözleşme başarıyla atandı.");
    reset();
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold fs-3">Sözleşme Atama</h1>

      <Card className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Sözleşme ID */}
          <div className="mb-3">
            <Label htmlFor="contractId">Sözleşme ID</Label>
            <Input
              id="contractId"
              placeholder="örn. 123456"
              {...register("contractId")}
            />
            {errors.contractId && (
              <small className="text-danger">{errors.contractId.message}</small>
            )}
          </div>

          {/* Kullanıcı E-Postası */}
          <div className="mb-3">
            <Label htmlFor="userEmail">Kullanıcı E-Postası</Label>
            <Input
              id="userEmail"
              placeholder="örn. kullanici@firma.com"
              {...register("userEmail")}
            />
            {errors.userEmail && (
              <small className="text-danger">{errors.userEmail.message}</small>
            )}
          </div>

          {/* Not */}
          <div className="mb-3">
            <Label htmlFor="note">Açıklama (isteğe bağlı)</Label>
            <Textarea
              id="note"
              rows={3}
              placeholder="Bu atama ile ilgili not bırakabilirsiniz..."
              {...register("note")}
            />
          </div>

          <Button type="submit" className="w-100">
            Sözleşmeyi Ata
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AssignContractPage;
