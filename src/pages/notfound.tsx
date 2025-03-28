// src/pages/notfound.tsx

import { useNavigate } from "react-router-dom";
import { AlertCircle, Home, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full space-y-6 text-center">
        <Card className="p-8 shadow-md">
          <div className="flex justify-center mb-4">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            404 - Sayfa Bulunamadı
          </h1>

          <p className="text-sm text-muted-foreground mb-4">
            Aradığınız sayfa sistemimizde mevcut değil ya da kaldırılmış olabilir. Lütfen bağlantıyı kontrol edin ya da aşağıdaki seçeneklerden birini kullanarak devam edin.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <Button variant="default" onClick={() => navigate("/dashboard")}>
              <Home className="w-4 h-4 mr-2" />
              Anasayfaya Dön
            </Button>

            <Button variant="outline" onClick={() => navigate("/dashboard/support")}>
              <LifeBuoy className="w-4 h-4 mr-2" />
              Destek Talebi Oluştur
            </Button>
          </div>
        </Card>

        <div className="text-xs text-muted-foreground pt-4">
          Eğer bu hatayı sürekli görüyorsanız, sistem yöneticinizle iletişime geçiniz.
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
