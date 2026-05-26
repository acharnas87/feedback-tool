import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from "recharts";

const sampleData = [
  { time: "Week 1", agree: 60, keyword: "Leadership" },
  { time: "Week 2", agree: 70, keyword: "Collaboration" },
  { time: "Week 3", agree: 50, keyword: "Ideas" },
];

const keywordData = [
  { keyword: "Leadership", agree: 65 },
  { keyword: "Collaboration", agree: 75 },
  { keyword: "Ideas", agree: 55 },
];

export default function ManagerReportingView() {
  return (
    <div className="flex flex-col gap-6 h-[85%] overflow-y-auto">
      <div className="p-4 bg-white rounded-2xl shadow">
        <h2 className="text-lg font-bold mb-3">Agreement Trend Over Time</h2>
        <LineChart width={600} height={300} data={sampleData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="agree" stroke="#8884d8" />
        </LineChart>
      </div>

      <div className="p-4 bg-white rounded-2xl shadow">
        <h2 className="text-lg font-bold mb-3">Keyword Breakdown</h2>
        <BarChart width={600} height={300} data={keywordData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="keyword" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="agree" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}