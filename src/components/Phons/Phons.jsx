import axios from "axios";
import { useEffect, useState } from "react";
// Recharts এর প্রয়োজনীয় কম্পোনেন্টগুলো ইমপোর্ট করতে হবে
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Phons = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
        iPhone Price Analysis: {phones.length} Models
      </h2>

      <div className="max-w-7xl mx-auto w-full h-[500px] p-4 bg-white p-4 shadow-xl rounded-2xl border border-gray-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={phones}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={1} />
            <YAxis />
            <Tooltip cursor={{ fill: "#f3f4f6" }} />
            <Bar
              dataKey="price"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Phons;
