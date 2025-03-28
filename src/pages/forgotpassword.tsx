// src/pages/ForgotPassword.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const schema = z.object({
  email: z.string().email("Geçerli bir e-posta girin"),
});

type ForgotPasswordForm = z.infer<typeof schema>;

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log("Şifre sıfırlama e-postası gönderilecek:", data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Şifremi Unuttum
          </h2>

          {submitted ? (
            <p className="text-center text-green-600">
              Eğer bu e-posta sistemimizde kayıtlıysa, sıfırlama bağlantısı gönderildi.
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="ornek@firma.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Sıfırlama Linki Gönder
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;