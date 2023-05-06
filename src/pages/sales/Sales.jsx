import React from 'react';
import './sales.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Sales() {
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 4780,
          pv: 4908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 5390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Agu',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Sep',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Nov',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Dec',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
      ];
 

  return (
    <div className='sales' style={{ width:"100%"}}>
        <h1 className="salesTitle">Sales</h1>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" strokeOpacity="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" strokeOpacity="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <p className="notes">Tips: Hover the legend !</p>
    </div>
  );
};
