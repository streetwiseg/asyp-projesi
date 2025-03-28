// src/components/dashboard/welcomecard.tsx

import { User } from "lucide-react";

interface WelcomeCardProps {
  name: string;
  role?: string;
}

const WelcomeCard = ({ name, role = "Kullanıcı" }: WelcomeCardProps) => {
  const formattedHour = new Date().getHours();
  const greeting =
    formattedHour < 12
      ? "Günaydın"
      : formattedHour < 18
      ? "İyi günler"
      : "İyi akşamlar";

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          👋 {greeting}, {name}!
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          {role} olarak giriş yaptınız. Tüm sözleşmelerinizi buradan kolayca yönetebilirsiniz.
        </p>
      </div>

      <div className="hidden md:block">
        <User className="w-12 h-12 text-blue-500" />
      </div>
    </div>
  );
};

export default WelcomeCard;
