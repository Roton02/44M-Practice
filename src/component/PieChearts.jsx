import { Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const PieChearts = () => {
    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
    return (
        <div>
            <PieChart width={1200} height={350}  >
                <Tooltip></Tooltip>
                <Pie data={data02} dataKey={'value'} nameKey={'name'} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="red"></Pie>
                <Pie data={data01} dataKey={'value'} nameKey={'name'} cx="50%" cy="50%" outerRadius={50} fill="yellow"> </Pie>
            </PieChart>
        </div>
    );
};

export default PieChearts;