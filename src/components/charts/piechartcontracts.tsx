// 📄 src/components/charts/PieChartContracts.tsx

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// Gerçek sistemde bu data API'den gelir ama şimdilik örnek
const data = [
  { name: "İmzalı", value: 72 },
  { name: "İmzasız", value: 28 },
];

// Kurumsal renk paleti (Mavi - Sarı)
const COLORS = ["#3b82f6", "#facc15"];

const PieChartContracts: React.FC = () => {
  return (
    <div className="bg-white rounded-3 shadow-sm p-4 h-100">
      <h5 className="fw-semibold text-dark mb-3">🧾 Sözleşme Dağılımı</h5>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartContracts;
