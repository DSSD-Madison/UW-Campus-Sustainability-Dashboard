import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp, BarChart2, RefreshCw, Droplet } from "lucide-react";
import { PieGraph } from "@/components/PieGraph";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabSlider: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div className="w-[160px] bg-gray-100 rounded-md relative">
      <motion.div
        className="absolute bg-green-500 rounded-md shadow-sm"
        animate={{
          x: value === "KW" ? 0 : 80,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        style={{
          width: "80px",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
      <div className="flex relative z-10">
        <button
          onClick={() => onChange("KW")}
          className={`w-[80px] py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            value === "KW" ? "text-white" : "text-gray-700"
          }`}
        >
          KW
        </button>
        <button
          onClick={() => onChange("CO2")}
          className={`w-[80px] py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            value === "CO2" ? "text-white" : "text-gray-700"
          }`}
        >
          CO2
        </button>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState("Last Month");
  const [hall, setHall] = useState("University Overview");
  const [tab, setTab] = useState("KW");

  const data = {
    "Last Week": [
      { name: "Mon", value: 30, overall: 50 },
      { name: "Tue", value: 40, overall: 50 },
      { name: "Wed", value: 35, overall: 50 },
      { name: "Thu", value: 45, overall: 50 },
      { name: "Fri", value: 50, overall: 50 },
    ],
    "Last Month": [
      { name: "Week 1", value: 100, overall: 120 },
      { name: "Week 2", value: 110, overall: 120 },
      { name: "Week 3", value: 105, overall: 120 },
      { name: "Week 4", value: 115, overall: 120 },
    ],
    "Last 6 Months": [
      { name: "Jan", value: 300, overall: 350 },
      { name: "Feb", value: 320, overall: 350 },
      { name: "Mar", value: 310, overall: 350 },
      { name: "Apr", value: 330, overall: 350 },
      { name: "May", value: 340, overall: 350 },
      { name: "Jun", value: 360, overall: 350 },
    ],
  }[timeframe];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-6 space-y-6 bg-white min-h-screen text-gray-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-semibold text-gray-900"
        >
          Dashboard
        </motion.h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <motion.div variants={itemVariants}>
            <Select value={hall} onValueChange={setHall}>
              <SelectTrigger className="w-48 bg-white border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:outline-none rounded-md">
                <SelectValue>{hall}</SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 text-gray-900 rounded-md">
                <SelectItem value="University Overview">
                  University Overview
                </SelectItem>
                <SelectItem value="Dejope Residence Hall">
                  Dejope Residence Hall
                </SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div variants={itemVariants}>
            <DatePickerWithRange />
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <CustomTabSlider value={tab} onChange={setTab} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          {
            title: "CO2 Reduction",
            value: "15%",
            icon: <TrendingUp className="w-5 h-5 text-green-600" />,
          },
          {
            title: "Renewable Energy Use",
            value: "70%",
            icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Waste Recycled",
            value: "60%",
            icon: <RefreshCw className="w-5 h-5 text-yellow-600" />,
          },
          {
            title: "Water Conservation",
            value: "25%",
            icon: <Droplet className="w-5 h-5 text-teal-600" />,
          },
        ].map((metric, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-md border border-gray-200 hover:border-gray-300 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-0.5">
                  {metric.title}
                </div>
                <div className="text-2xl font-semibold text-gray-900">
                  {metric.value}
                </div>
              </div>
              <div className="p-2 rounded-md bg-gray-50">{metric.icon}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white p-6 rounded-md border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Sustainability Performance
            </h2>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-40 bg-white border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:outline-none rounded-md">
                <SelectValue>{timeframe}</SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 text-gray-900 rounded-md">
                <SelectItem value="Last Week">Last Week</SelectItem>
                <SelectItem value="Last Month">Last Month</SelectItem>
                <SelectItem value="Last 6 Months">Last 6 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
                  color: "#1e293b",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ fill: "#16a34a", strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="overall"
                stroke="#94a3b8"
                strokeWidth={2}
                dot={{ fill: "#94a3b8", strokeWidth: 1 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -2 }}
          className="bg-white p-6 rounded-md border border-gray-200"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Leaderboard
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-sm font-medium text-gray-600">
                  Rank
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-600">
                  Name
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-600">
                  Score
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { rank: 1, name: "Chadbourne", score: 1200 },
                { rank: 2, name: "Ogg", score: 1100 },
                { rank: 3, name: "Witte", score: 1000 },
                { rank: 4, name: "Dejope", score: 900 },
                { rank: 5, name: "Sellery", score: 850 },
              ].map((entry) => (
                <TableRow
                  key={entry.rank}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="text-sm font-medium text-gray-900">
                    {entry.rank}
                  </TableCell>
                  <TableCell className="text-sm text-gray-700">
                    {entry.name}
                  </TableCell>
                  <TableCell className="text-sm text-gray-700">
                    {entry.score}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4">
            <PieGraph />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
