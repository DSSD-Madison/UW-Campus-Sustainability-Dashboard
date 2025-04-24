"use client";

import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Zap, Loader2, DollarSign, Ruler, Users, BadgeDollarSign } from "lucide-react";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DateRange } from "react-day-picker";
import { PieGraph } from "@/components/PieGraph";

// Define types for the API data
interface Dorm {
  id: string;
  name: string;
}

interface ConsumptionDataItem {
  month: string;
  usage: number;
  average: number | null;
}

interface StatItem {
  label: string;
  value: string | number;
  change: string | number;
  direction?: "up" | "down" | "neutral";
}

interface StatsData {
  totalUsage?: StatItem;
  totalCost?: StatItem;
  costPerKWH?: StatItem;
  usagePerSqFt?: StatItem;
  capacity?: StatItem;
  usagePerPerson?: StatItem;
  [key: string]: StatItem | undefined;
}

interface LeaderboardItem {
  dormId: string; 
  name: string;
  totalUsageKwh: number;
  usagePerSquareFoot: number;
  usagePerResident: number;
  percentageOfTotal: number;
}


const Dashboard = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 1),
    to: new Date(),
  });
  const [building, setBuilding] = useState<string>("all");
  const [consumptionData, setConsumptionData] = useState<ConsumptionDataItem[]>([]);
  const [statsData, setStatsData] = useState<StatsData>({});
  const [dorms, setDorms] = useState<Dorm[]>([]);
  const [isLoadingDorms, setIsLoadingDorms] = useState<boolean>(true);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardItem[]>([]);

  const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${year}`;
  };

  useEffect(() => {
    if (building !== "all") return;

    const start = dateRange?.from ? formatDate(dateRange.from) : "01/2025";
    const end = dateRange?.to ? formatDate(dateRange.to) : "12/2025";

    fetch(`https://yz83hrwsg4.execute-api.us-east-2.amazonaws.com/dev/leaderboard?startTime=${start}&endTime=${end}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.leaderboard) {
          setLeaderboardData(data.leaderboard);
        }
      })
      .catch((err) => console.error("Leaderboard fetch error:", err));
  }, [building, dateRange]);

  useEffect(() => {
    setIsLoadingDorms(true);
    fetch("https://yz83hrwsg4.execute-api.us-east-2.amazonaws.com/dev/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.dorms) {
          setDorms(data.dorms);
        }
      })
      .catch((err) => console.error("Error fetching dorms:", err))
      .finally(() => setIsLoadingDorms(false));
  }, []);

  useEffect(() => {

    const startDate = dateRange?.from ? formatDate(dateRange.from) : "01/2025";
    const endDate = dateRange?.to ? formatDate(dateRange.to) : "12/2025";

    let apiUrl = `https://yz83hrwsg4.execute-api.us-east-2.amazonaws.com/dev/dorm?dorm=${building}&startTime=${startDate}&endTime=${endDate}`;
    if (building === "all") {
      apiUrl = `https://yz83hrwsg4.execute-api.us-east-2.amazonaws.com/dev/dorm?startTime=${startDate}&endTime=${endDate}`;
    }

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.dataItems) {
          const mappedData: ConsumptionDataItem[] = data.dataItems.map((item: any) => ({
            month: item.month,
            usage: item.usageKWH,
            average: item.averageUsagePerDorm ?? null,
          }));
          setConsumptionData(mappedData);
        }

        if (data.summary) {
          setStatsData(data.summary);
        }
      })
      .catch((err) => console.error("Error fetching energy data:", err));
  }, [building, dateRange]);

  // Define the stat cards
  const statCards = [
    {
      key: "totalUsage",
      icon: <Zap className="w-6 h-6 text-white" />,
      bg: "bg-green-500",
    },
    {
      key: "totalCost", // Cost card
      icon: <BadgeDollarSign className="w-6 h-6 text-white" />,
      bg: "bg-purple-500",
    },
    {
      key: "costPerKWH",
      icon: <DollarSign className="w-6 h-6 text-white" />,
      bg: "bg-yellow-500",
    },
    {
      key: "usagePerSqFt",
      icon: <Ruler className="w-6 h-6 text-white" />,
      bg: "bg-blue-500",
    },
  ];

  return (
    <div className="p-6 space-y-8 bg-[hsl(var(--wsbackground))] min-h-screen page-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 stagger-container">
        <div className="stagger-item">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2.5 rounded-lg">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-red-600">University of Wisconsin-Madison </span>
                Campus Sustainability Dashboard
              </h1>
              <p className="text-gray-500 text-sm">
                Track and analyze energy consumption across campus
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <div className="stagger-item" style={{ "--index": "2" } as React.CSSProperties}>
            <DatePickerWithRange onDateChange={setDateRange} />
          </div>

          <div className="stagger-item" style={{ "--index": "3" } as React.CSSProperties}>
            {isLoadingDorms ? (
              <div className="flex items-center justify-center min-w-56 px-4 py-2 border border-gray-200 bg-white rounded-lg shadow-sm">
                <Loader2 className="animate-spin text-gray-500" />
              </div>
            ) : (
              <Select value={building} onValueChange={setBuilding}>
                <SelectTrigger className="min-w-56 bg-white border-gray-200 focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:outline-none rounded-lg shadow-sm">
                  <SelectValue>
                    {building === "all"
                      ? "University Overview"
                      : dorms.find((d) => d.id === building)?.name || "Select a dorm"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 text-gray-900 rounded-lg">
                  <SelectItem value="all">University Overview</SelectItem>
                  {dorms.map((dorm) => (
                    <SelectItem key={dorm.id} value={dorm.id}>
                      {dorm.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
        {statCards.map(({ key, icon, bg }, index) => {
          const stat = statsData[key];
          if (!stat) return null;

          return (
            <div
              key={index}
              className="stagger-item stat-card"
              style={{ "--index": index + 1 } as React.CSSProperties}
            >
              <Card className="border-0 shadow-md overflow-hidden relative h-full bg-white">
                {/* Moved bubble to top right */}
                <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10 ${bg}`} />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${bg}`}>{icon}</div>
                      <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      stat.direction === "up"
                        ? "bg-green-100 text-green-600"
                        : stat.direction === "down"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {stat.change !== "N/A" ? `${stat.change}%` : "-"}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-gray-900">{stat.value ?? "-"}</p>
                    <span className="text-sm text-gray-500">
                      {key === "totalCost" || key === "costPerKWH" ? "$" : ""}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Chart and Sidebar Layout */}
      <div className="pt-6 stagger-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Main Chart + Building Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Chart */}
            <div className="stagger-item" style={{ "--index": "1" } as React.CSSProperties}>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle>Electricity Consumption</CardTitle>
                  <CardDescription>Monthly energy usage in kilowatts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={consumptionData}>
                      <defs>
                        <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="usage"
                        name="Energy Usage (KWH)"
                        stroke="#16a34a"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorUsage)"
                      />
                      <Area
                        type="monotone"
                        dataKey="average"
                        name="Campus Average"
                        stroke="#94a3b8"
                        strokeWidth={2}
                        fill="none"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            {/* Building Information - Now directly below the graph */}
            <div className="stagger-item" style={{ "--index": "2" } as React.CSSProperties}>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle>Building Information</CardTitle>
                  <CardDescription>Capacity and utilization details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="p-3 rounded-full bg-gray-600 mr-4">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Building Capacity</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {statsData.capacity?.value || "-"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="p-3 rounded-full bg-orange-500 mr-4">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Energy Usage per Person</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {statsData.usagePerPerson?.value || "-"} <span className="text-sm text-gray-500">kWh/person</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1 stagger-item" style={{ "--index": "3" } as React.CSSProperties}>
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Energy Usage Leaderboard</CardTitle>
                  <CardDescription>Top energy consuming buildings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboardData.map((dorm, index) => (
                      <div key={dorm.dormId} className="flex items-center">
                        <div className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 ${
                          index === 0 ? "bg-yellow-500" :
                          index === 1 ? "bg-gray-300" :
                          index === 2 ? "bg-amber-700" : "bg-gray-200"
                        }`}>
                          <span className="text-xs font-bold text-white">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-medium text-sm text-gray-900">{dorm.name}</h4>
                            <span className="text-sm text-gray-500">
                              {dorm.totalUsageKwh.toLocaleString()} kWh
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                            <div
                              className={`h-1.5 rounded-full ${
                                index === 0 ? "bg-yellow-500" :
                                index === 1 ? "bg-gray-400" :
                                index === 2 ? "bg-amber-700" : "bg-gray-300"
                              }`}
                              style={{
                                width: `${
                                  leaderboardData[0]?.totalUsageKwh
                                    ? (dorm.totalUsageKwh / leaderboardData[0].totalUsageKwh) * 100
                                    : 0
                                }%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    </div>
                  </CardContent>
                </Card>

                {
                  building === "all" && (
                    <Card className="border-0 shadow-md">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Energy Distribution</CardTitle>
                        <CardDescription>Usage across campus buildings</CardDescription>
                      </CardHeader>
                      <CardContent>
                      {building === "all" && (
                          <PieGraph
                            dormId="all"
                            leaderboardData={leaderboardData}
                          />
                        )}
                      </CardContent>
                    </Card>
                  )
                }
              </div>
            </div>
          </div>
        </div>

      <style>{`
        /* Page fade-in animation */
        .page-fade-in {
          opacity: 0;
          animation: fadeIn 0.4s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Staggered animations */
        .stagger-container {
          opacity: 1;
        }

        .stagger-item {
          opacity: 0;
          transform: translateY(5px);
          animation: staggerFade 0.15s ease-out forwards;
          animation-delay: calc(var(--index, 0) * 20ms);
        }

        @keyframes staggerFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Stat card hover effect */
        .stat-card {
          transition: transform 0.2s ease;
        }

        .stat-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;