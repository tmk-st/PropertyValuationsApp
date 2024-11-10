import { useGetData } from "@/hooks/useGetData";
import { CustomTickProps, ResultDataType } from "@/types";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

type Props = {
  data: ResultDataType;
};

// X軸のラベルのカスタマイズ
const CustomTick = ({ x, y, payload, index }: CustomTickProps) => {
  const fontSize = index === 0 ? 16 : 14;
  const fontWeight = index === 0 ? 700 : 400;
  return (
    <text
      x={x}
      y={y}
      dy={16}
      textAnchor="middle"
      fill="white"
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {payload.value}
    </text>
  );
};

const Graph: React.FC<Props> = ({ data }) => {
  const { aveData, getAveData } = useGetData();

  useEffect(() => {
    // 関東平均値を取得
    getAveData(data.years[0].year);
  }, []);

  // グラフ表示データ
  const renderData = [
    {
      name: data.prefectureName,
      value: data.years[0].value,
    },
    {
      name: "関東平均",
      value: aveData,
    },
  ];

  return (
    <div className="w-[713px] h-[466px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={renderData}
          barSize={200}
          margin={{
            top: 30,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "white" }}
            label={{ fill: "white" }}
            stroke="white"
            tickLine={false}
            tickMargin={10}
            padding={{ left: 60, right: 60 }}
            tick={(props) => <CustomTick {...props} />}
          />
          <YAxis
            axisLine={{ stroke: "white" }}
            stroke="white"
            tick={{ fontSize: 12 }}
            label={{
              value: "（円/㎡）",
              position: "top",
              offset: 20,
              fill: "white",
              fontSize: 12,
            }}
            tickFormatter={(tick) => {
              return tick.toLocaleString();
            }}
            padding={{ top: 50 }}
          />
          <defs>
            <linearGradient id="colorUv0" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#009984" />
              <stop offset="95%" stopColor="#97BF4A" />
            </linearGradient>
            <linearGradient id="colorUv1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#706D65" />
              <stop offset="95%" stopColor="#57544C" />
            </linearGradient>
          </defs>
          <Bar dataKey="value">
            {renderData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
