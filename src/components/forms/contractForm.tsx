import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { ContractSchema, contractSchema } from "@/schemas/contractSchema";

interface ContractFormProps {
  onSubmit: (data: ContractSchema) => void;
  defaultValues?: Partial<ContractSchema>;
  submitText?: string;
}

const ContractForm: React.FC<ContractFormProps> = ({
  onSubmit,
  defaultValues,
  submitText = "Kaydet",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContractSchema>({
    resolver: zodResolver(contractSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-3">
        <Label htmlFor="title" required>
          Sözleşme Başlığı
        </Label>
        <Input
          id="title"
          placeholder="Sözleşme Başlığı"
          {...register("title")}
          error={errors.title?.message}
        />
      </div>

      <div className="mb-3">
        <Label htmlFor="type" required>
          Sözleşme Türü
        </Label>
        <Select {...register("type")}>
          <SelectItem value="signed">İmzalı</SelectItem>
          <SelectItem value="unsigned">İmzasız</SelectItem>
        </Select>
        {errors.type && <div className="text-danger mt-1">{errors.type.message}</div>}
      </div>

      <div className="mb-3">
        <Label htmlFor="description">Açıklama</Label>
        <Textarea
          id="description"
          placeholder="Varsa kısa bir açıklama girin"
          {...register("description")}
        />
      </div>

      <Button type="submit" variant="primary" className="w-100">
        {submitText}
      </Button>
    </form>
  );
};

export default ContractForm;
