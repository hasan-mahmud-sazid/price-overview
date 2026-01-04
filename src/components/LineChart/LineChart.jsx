import {
  Line,
  LineChart as LChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChart = () => {
  const studentMarksData = [
    { id: 1, name: "Sajid", math: 85, physics: 78, chemistry: 82 },
    { id: 2, name: "Ayesha", math: 92, physics: 88, chemistry: 94 },
    { id: 3, name: "Rafiq", math: 78, physics: 85, chemistry: 70 },
    { id: 4, name: "Nila", math: 88, physics: 82, chemistry: 85 },
    { id: 5, name: "Tanvir", math: 95, physics: 91, chemistry: 88 },
    { id: 6, name: "Mitu", math: 70, physics: 65, chemistry: 75 },
    { id: 7, name: "Arif", math: 82, physics: 80, chemistry: 78 },
    { id: 8, name: "Sumaiya", math: 90, physics: 92, chemistry: 91 },
    { id: 9, name: "Joy", math: 75, physics: 72, chemistry: 80 },
    { id: 10, name: "Anika", math: 89, physics: 85, chemistry: 87 },
  ];
  return (
    <div className="max-w-7xl mx-auto h-112.5">
      <ResponsiveContainer width="100%" height="100%">
        <LChart
          data={studentMarksData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="math"
            stroke="#EF4444"
            strokeWidth={3}
            dot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="physics"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ r: 6 }}
          />
        </LChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
