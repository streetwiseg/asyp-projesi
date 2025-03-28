// src/components/charts/BarChartContracts.tsx

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

const BarChartContracts: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await axios.get("http://localhost:8010/api/contracts/monthly-stats");
        setData(response.data || []);
      } catch (err) {
        console.error(err);
        setError("Sözleşme verisi alınamadı.");
      } finally {
        setLoading(false);
      }
    };

    fetchBarChartData();
  }, []);

  if (loading) return <div className="text-center">Yükleniyor...</div>;
  if (error) return <div className="alert alert-danger text-center">{error}</div>;
  if (!data || data.length === 0) return <div className="text-center">Sözleşme verisi bulunamadı.</div>;

  return (
    <div className="bg-white p-4 rounded-3 shadow-sm h-100">
      <h5 className="fw-semibold text-dark mb-3">📈 Aylık Sözleşme Dağılımı</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} adet`} />
          <Legend />
          <Bar dataKey="signed" fill="#3b82f6" name="İmzalı" radius={[4, 4, 0, 0]} />
          <Bar dataKey="unsigned" fill="#facc15" name="İmzasız" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartContracts;
