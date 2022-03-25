import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./chart.css";

const data = [
  {
    name: "Mon",
    songDiscovered: 4000,
    songListened: 2400,
  },
  {
    name: "Tue",
    songDiscovered: 3000,
    songListened: 1398,
  },
  {
    name: "Wed",
    songDiscovered: 2000,
    songListened: 9800,
  },
  {
    name: "Thi",
    songDiscovered: 2780,
    songListened: 3908,
  },
  {
    name: "Fri",
    songDiscovered: 1890,
    songListened: 4800,
  },
  {
    name: "Sat",
    songDiscovered: 2390,
    songListened: 3800,
  },
  {
    name: "Sun",
    songDiscovered: 3490,
    songListened: 4300,
  },
];

function UserActivity() {
  return (
    <div className="user__activity">
      <div className="user__activity__info">
        <div>
          <h3>前回の記録</h3>
          <span> 月 日</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={true} tickLine={true} />
          <Tooltip />
          <Bar dataKey="songDiscovered" stackId="a" fill="#4361ee" />
          <Bar
            radius={[7, 7, 0, 0]}
            dataKey="songListened"
            stackId="a"
            fill="#48bfe3"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserActivity;
