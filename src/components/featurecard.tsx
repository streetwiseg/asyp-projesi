// src/components/FeatureCard.tsx

import { LucideIcon } from "lucide-react";

// FeatureCard Props
type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// %100 Canlıya Hazır FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="card shadow-sm border-0 rounded-3 p-4 mb-4 h-100 d-flex flex-column justify-content-between hover-shadow transition-all">
      <div>
        <div className="d-flex justify-content-center align-items-center bg-primary bg-opacity-10 rounded-circle p-3 mb-3" style={{ width: "60px", height: "60px", margin: "0 auto" }}>
          <Icon size={24} className="text-primary" />
        </div>
        <h5 className="text-center fw-semibold mb-2">{title}</h5>
        <p className="text-center text-muted small">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
