import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/widgets/LineChartWidget.css';

const data = [
    { name: 'Jan', uv: 4010, pv: 2430, amt: 2410 },
    { name: 'Feb', uv: 3010, pv: 1428, amt: 2220 },
    { name: 'Mar', uv: 2010, pv: 6810, amt: 2300 },
    { name: 'Apr', uv: 2790, pv: 5518, amt: 2100 },
    { name: 'May', uv: 1900, pv: 4810, amt: 2191 },
    { name: 'Jun', uv: 2400, pv: 3810, amt: 2510 },
    { name: 'Jul', uv: 3500, pv: 4310, amt: 2110 },
];

const LineChartWidget = () => {
    return (
        <div className="line-chart-widget">
            <h3>Line Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartWidget;
