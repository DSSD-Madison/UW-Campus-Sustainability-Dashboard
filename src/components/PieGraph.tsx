"use client";

import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps
} from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Card, CardContent } from "@/components/ui/card";

interface LeaderboardItem {
  dormId: string; 
  name: string;
  totalUsageKwh: number;
  usagePerSquareFoot: number;
  usagePerResident: number;
  percentageOfTotal: number;
}

interface PieGraphProps {
  dormId?: string;
  leaderboardData?: LeaderboardItem[];
}

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length && payload[0].value != null && payload[0].name) {
    return (
      <div className="bg-white p-2 shadow-md border border-gray-200 rounded-md text-sm">
        <p className="font-medium">
          {`${payload[0].name}: ${Number(payload[0].value).toLocaleString()} kWh`}
        </p>
      </div>
    );
  }
  return null;
};

export function PieGraph({ dormId = "all", leaderboardData = [] }: PieGraphProps) {
  if (dormId !== "all" || leaderboardData.length === 0) return null;

  const pieData = leaderboardData.map((item) => ({
    name: `${item.name} (${item.percentageOfTotal}%)`,
    value: item.totalUsageKwh,
    fill: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
  }));

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              nameKey="name"
              paddingAngle={2}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
