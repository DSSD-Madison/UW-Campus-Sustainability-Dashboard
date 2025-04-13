import React, { useState } from "react";
import { motion } from "framer-motion";
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
import { TrendingUp, BarChart2, RefreshCw } from "lucide-react";
import { PieGraph } from "@/components/PieGraph";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";

const CustomTabSlider: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div className="w-[160px] bg-gray-100/50 backdrop-blur-sm rounded-lg relative">
      <motion.div
        className="absolute bg-green-500 rounded-lg shadow-sm"
        animate={{
          x: value === "KW" ? 0 : 80,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.5,
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
          className={`w-[80px] py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
            value === "KW" ? "text-white" : "text-gray-700"
          }`}
        >
          KW
        </button>
        <button
          onClick={() => onChange("CO2")}
          className={`w-[80px] py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
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
        staggerChildren: 0.02,
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="p-8 space-y-8 min-h-screen bg-gradient-to-br from-gray-50 to-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
        >
          Sustainability Dashboard
        </motion.h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <motion.div variants={itemVariants}>
            <Select value={hall} onValueChange={setHall}>
              <SelectTrigger className="w-48 bg-white/80 backdrop-blur-sm border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:outline-none rounded-lg">
                <SelectValue>{hall}</SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white/80 backdrop-blur-sm border-gray-200 text-gray-900 rounded-lg">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          {
            title: "CO2 Reduction",
            value: "15%",
            icon: <TrendingUp className="w-5 h-5 text-green-600" />,
            trend: "+2.5%",
          },
          {
            title: "Renewable Energy",
            value: "70%",
            icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
            trend: "+5%",
          },
          {
            title: "Waste Recycled",
            value: "60%",
            icon: <RefreshCw className="w-5 h-5 text-yellow-600" />,
            trend: "+3%",
          },
        ].map((metric, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.1 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-150 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-1">{metric.title}</div>
                <div className="text-3xl font-bold text-gray-900">
                  {metric.value}
                </div>
                <div className="text-sm text-green-600 mt-1">
                  {metric.trend}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50/50">{metric.icon}</div>
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
          className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-sm"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Sustainability Performance
            </h2>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:outline-none rounded-lg">
                <SelectValue>{timeframe}</SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white/80 backdrop-blur-sm border-gray-200 text-gray-900 rounded-lg">
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
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(226, 232, 240, 0.5)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
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
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
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
                  className="hover:bg-gray-50/50 transition-colors"
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
          <div className="mt-6">
            <PieGraph />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
