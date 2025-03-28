// src/components/PackageCard.tsx

import { CheckCircle2 } from "lucide-react";
import { Button } from "react-bootstrap";

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  onSelect?: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  features,
  featured = false,
  onSelect,
}) => {
  return (
    <div
      className={`card h-100 border-0 shadow-sm rounded-3 transition-all ${
        featured ? "border border-primary bg-light" : ""
      }`}
    >
      <div className="card-body d-flex flex-column text-center p-4">

        {/* Paket Başlığı */}
        <h5 className="fw-bold mb-1 text-dark">{title}</h5>

        {/* Paket Fiyatı */}
        <p className="h4 text-primary mb-3">{price}</p>

        {/* Özellikler */}
        <ul className="list-unstyled text-start mb-4 flex-grow-1">
          {features.map((feature, index) => (
            <li key={index} className="d-flex align-items-center mb-2">
              <CheckCircle2 size={18} className="text-success me-2" />
              <span className="text-muted">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          onClick={onSelect}
          variant={featured ? "success" : "outline-primary"}
          size="lg"
          className="w-100 mt-auto fw-semibold"
        >
          {featured ? "Hemen Başla" : "Paket Seç"}
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
