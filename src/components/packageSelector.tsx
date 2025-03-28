import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPackage } from "@/store/packageslice";

// Örnek paketler
const availablePackages = [
  {
    name: "Free",
    description: "Temel özellikler",
    features: ["5 Sözleşme Limiti", "Sınırlı Raporlama"],
  },
  {
    name: "Standart",
    description: "Orta seviye özellikler",
    features: ["50 Sözleşme Limiti", "Raporlama", "AI Analiz"],
  },
  {
    name: "Pro",
    description: "Gelişmiş özellikler",
    features: ["200 Sözleşme Limiti", "AI Analiz", "Detaylı Raporlama"],
  },
  {
    name: "Enterprise",
    description: "Kurumsal seviye",
    features: ["Limitsiz Sözleşme", "AI Analiz", "Tam Raporlama", "Özel Destek"],
  },
];

const PackageSelector = () => {
  const dispatch = useAppDispatch();
  const selectedPackage = useAppSelector((state) => state.packages.packageName);

  const handleSelect = (pkgName: string) => {
    const foundPackage = availablePackages.find((p) => p.name === pkgName);
    if (!foundPackage) return;
    dispatch(
      setPackage({
        packageName: foundPackage.name,
        features: foundPackage.features.map((f) => ({
          id: f.toLowerCase().replace(/\s+/g, "-"),
          name: f,
          isActive: true,
        })),
      })
    );
  };

  return (
    <div className="row">
      {availablePackages.map((pkg) => (
        <div className="col-md-6 col-lg-3 mb-4" key={pkg.name}>
          <Card className={`p-3 ${selectedPackage === pkg.name ? "border-primary" : ""}`}>
            <h5>{pkg.name}</h5>
            <p className="text-muted">{pkg.description}</p>
            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Button
              variant={selectedPackage === pkg.name ? "success" : "primary"}
              className="w-100"
              onClick={() => handleSelect(pkg.name)}
            >
              {selectedPackage === pkg.name ? "Seçildi" : "Seç"}
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PackageSelector;
