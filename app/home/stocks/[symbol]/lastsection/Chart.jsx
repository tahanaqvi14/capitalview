'use client'

import { useState } from "react";
import './style.css'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* More data = smoother scrolling */
const priceData = [
  { month: "Jan", price: 120 },
  { month: "Feb", price: 135 },
  { month: "Mar", price: 110 },
  { month: "Apr", price: 145 },
  { month: "May", price: 130 },
  { month: "Jun", price: 125 },
  { month: "Jul", price: 140 },
  { month: "Aug", price: 150 },
  { month: "Sep", price: 138 },
  { month: "Oct", price: 155 },
  { month: "Nov", price: 160 },
  { month: "Dec", price: 170 },
];

export default function Charpage() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);
  
    return (
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4 max-w-full  overflow-hidden">
            <p className="text-xs uppercase text-gray-500 mb-2">
                Recent Price Movement
            </p>
            <div className="relative overflow-hidden">
    
            {/* ───── Scroll Container ───── */}
                <div className="overflow-x-auto scroll-hide">
                    {/* Chart width > container width */}
                    <div className="min-w-[900px] h-[320px] "
                        onFocus={(e) => e.target.blur()}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={priceData}>
                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    interval={0}
                                    tickLine={false}
                                    padding={{ left: 6, right: 10 }}
                                />

                                {/* <YAxis
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        /> */}

                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="price"
                                    stroke="#2563eb"
                                    strokeWidth={2}
                                    activeDot={false}
                                    dot={({ cx, cy, index }) => {
                                        let fill = "#93c5fd";
                                        if (hoverIndex === index) fill = "#3b82f6";
                                        if (activeIndex === index) fill = "#1e40af";

                                        const r = activeIndex === index ? 11 : 7;

                                        return (
                                            <circle
                                                cx={cx}
                                                cy={cy}
                                                r={r}
                                                fill={fill}
                                                className="cursor-pointer"
                                                style={{ transition: "all 0.2s ease" }}
                                                onClick={() => setActiveIndex(index)}
                                                onMouseEnter={() => setHoverIndex(index)}
                                                onMouseLeave={() => setHoverIndex(null)}
                                            />
                                        );
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            {/* ================= Event Buttons ================= */}
            {/* <div className="flex flex-wrap gap-3 mt-5">
                {["Jan 15", "Feb 8", "Mar 20", "Apr 10", "May 25"].map((date) => (
                    <button
                        key={date}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition
                    ${date === "Mar 20"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {date}
                    </button>
                ))}
            </div> */}
        </div>
    )
}