import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailReminders: true,
    contractExpiry: true,
    paymentAlerts: false,
    followUpReminders: false,
  });

  const handleChange = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleSave = () => {
    // TODO: Backend entegrasyonu yapılacak
    toast.success("Bildirim tercihleri güncellendi.");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">
        Bildirim Ayarları
      </h2>

      <Card className="p-5 space-y-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="emailReminders"
            checked={settings.emailReminders}
            onChange={() => handleChange("emailReminders")}
          />
          <Label className="form-check-label" htmlFor="emailReminders">
            E-posta ile genel hatırlatmalar al
          </Label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="contractExpiry"
            checked={settings.contractExpiry}
            onChange={() => handleChange("contractExpiry")}
          />
          <Label className="form-check-label" htmlFor="contractExpiry">
            Sözleşme bitiş tarihinden önce uyarı al
          </Label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="paymentAlerts"
            checked={settings.paymentAlerts}
            onChange={() => handleChange("paymentAlerts")}
          />
          <Label className="form-check-label" htmlFor="paymentAlerts">
            Ödeme günleri için bildirim al
          </Label>
        </div>

        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="followUpReminders"
            checked={settings.followUpReminders}
            onChange={() => handleChange("followUpReminders")}
          />
          <Label className="form-check-label" htmlFor="followUpReminders">
            Takip edilmesi gereken sözleşmeler için bildirim al
          </Label>
        </div>

        <Button onClick={handleSave}>Ayarları Kaydet</Button>
      </Card>
    </div>
  );
};

export default NotificationSettings;
