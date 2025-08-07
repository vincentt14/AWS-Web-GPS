import { PieChart } from "@mui/x-charts";

interface ChartProps {
  data: { id: number | string; label: string; value: number; color?: string }[];
}

export default function Chart({ data }: ChartProps) {
  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  return (
    <div className="p-4 h-full rounded-xl shadow-md border border-gray-300 bg-white flex flex-col justify-center">
      <div className="h-fit flex flex-col items-center justify-center">
        <PieChart
          series={[
            {
              innerRadius: 50,
              outerRadius: 100,
              data,
              arcLabel: (item) => `${((item.value / data.reduce((acc, cur) => acc + cur.value, 0)) * 100).toFixed(0)}%`,
            },
          ]}
          {...settings}
        />

        <div className="mt-4 flex flex-col items-start space-y-2">
          {data.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-gray-700">{item.label}</span>
              <span className="text-sm text-gray-500 ml-2">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
