import React from "react";
import { useState, useEffect } from "react";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import io from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
  transports: ["websocket", "polling"],
});

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    socket.on("cpu", (cpuPercent) => {
      setData((currentData) => [...currentData, cpuPercent]);
    });
  }, []);

  return (
    <div style={{
      width:"100%",
      height:"100vh",
     
    }}>
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
        <h1>REAL TIME CPU USAGE</h1>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>

      <LineChart width={1000} height={700} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="black" strokeDasharray="2 2" />
        <Line type="monotone" dataKey="value" />
      </LineChart>
      </div>
    </div>
  );
};

export default App;
