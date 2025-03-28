// src/components/charts/LineChartFinance.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

// İpucu: api endpointini env'den alabilirsin
const LineChartFinance = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const response = await axios.get("http://localhost:8010/api/finance/monthly-summary");
        setData(response.data || []);
      } catch (err) {
        console.error(err);
        setError("Veri alınamadı");
      } finally {
        setLoading(false);
      }
    };

    fetchFinanceData();
  }, []);

  if (loading) return <div className="text-center">Yükleniyor...</div>;
  if (error) return <div className="alert alert-danger text-center">{error}</div>;
  if (!data || data.length === 0) return <div className="text-center">Finansal veri bulunamadı.</div>;

  return (
    <div className="bg-white rounded-3 shadow-sm p-4 h-100">
      <h5 className="fw-semibold text-dark mb-3">💹 Aylık Finansal Durum (₺)</h5>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" strokeOpacity={0.3} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `${value.toLocaleString("tr-TR")}`} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value: number) => `${value.toLocaleString("tr-TR")} ₺`} />
          <Legend verticalAlign="bottom" height={36} />
          <Line
            type="monotone"
            dataKey="payments"
            stroke="#ef4444"
            name="Ödemeler"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="collections"
            stroke="#10b981"
            name="Tahsilatlar"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartFinance;
