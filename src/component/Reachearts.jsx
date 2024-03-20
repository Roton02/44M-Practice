import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const Reachearts = () => {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]
    return (
        <div>
            <BarChart width={1200} height={350} data={data} >
            <CartesianGrid strokeDasharray="10 10" />
                <XAxis dataKey={'name'} ></XAxis>
                <YAxis></YAxis>
                <Tooltip/>
                <Bar dataKey={'uv'} fill="green" stroke="red"></Bar>
                <Bar dataKey='pv' fill="red" stroke="green"></Bar>
            </BarChart>
        </div>
    );
};

export default Reachearts;