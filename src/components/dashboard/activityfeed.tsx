// src/components/dashboard/activityfeed.tsx

import { Clock, FileText, UserCheck, AlertTriangle } from "lucide-react";

interface Activity {
  id: string;
  type: "contract" | "user" | "alert";
  message: string;
  timestamp: string;
}

const mockActivities: Activity[] = [
  {
    id: "a1",
    type: "contract",
    message: "Ali Yılmaz yeni bir sözleşme yükledi.",
    timestamp: "5 dakika önce",
  },
  {
    id: "a2",
    type: "user",
    message: "Zeynep Demir oturum açtı.",
    timestamp: "20 dakika önce",
  },
  {
    id: "a3",
    type: "alert",
    message: "1 sözleşmenin süresi dolmak üzere.",
    timestamp: "1 saat önce",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-4 text-slate-800">🔔 Aktivite Akışı</h3>
      <ul className="space-y-4">
        {mockActivities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
            <div className="p-2 bg-slate-100 rounded-full">
              {activity.type === "contract" && <FileText className="text-blue-500 w-5 h-5" />}
              {activity.type === "user" && <UserCheck className="text-green-500 w-5 h-5" />}
              {activity.type === "alert" && <AlertTriangle className="text-yellow-500 w-5 h-5" />}
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-700">{activity.message}</p>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" /> {activity.timestamp}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
