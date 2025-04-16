"use client"

import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

// Data for distribution across dorms
const universityData = [
  { name: "Adams Hall", value: 28, fill: "#22c55e" },
  { name: "Sellery Hall", value: 24, fill: "#60a5fa" },
  { name: "Witte Hall", value: 18, fill: "#38bdf8" },
  { name: "Dejope Hall", value: 15, fill: "#a3e635" },
  { name: "Ogg Hall", value: 10, fill: "#94a3b8" },
  { name: "Other Dorms", value: 5, fill: "#f97316" }
];

// Data for specific dorm comparisons
const dormComparisonData = {
  "adams": [
    { name: "Adams Hall", value: 100, fill: "#22c55e" }
  ],
  "barnard": [
    { name: "Barnard Hall", value: 100, fill: "#60a5fa" }
  ],
  "dejope": [
    { name: "Dejope Hall", value: 100, fill: "#a3e635" }
  ],
  "witte": [
    { name: "Witte Hall", value: 100, fill: "#38bdf8" }
  ],
  "all": universityData
};

// Custom render for the tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md border border-gray-200 rounded-md text-sm">
        <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function PieGraph({ dormId = "all" }) {
  // Get the correct data based on dorm selection
  const data = dormComparisonData[dormId] || universityData;
  
  // Change the title based on whether a specific dorm is selected
  const title = dormId === "all" ? 
    "Energy Usage Across Dorms" : 
    "Selected Dorm Energy Usage";

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={dormId === "all" ? 50 : 0}
              outerRadius={80}
              dataKey="value"
              nameKey="name"
              paddingAngle={dormId === "all" ? 2 : 0}
              label={dormId !== "all" ? ({ name }) => name : undefined}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        {dormId === "all" && (
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {universityData.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.fill }}></div>
                <span className="text-xs text-gray-700">{entry.name} ({entry.value}%)</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}