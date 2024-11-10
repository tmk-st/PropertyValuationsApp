import { useState } from "react";
import JsonData from "@/assets/data/estate_transactions.json";
import { AllDataType, ResultDataType, selectedParamType } from "@/types";

const defaultData: ResultDataType = {
  prefectureCode: "",
  prefectureName: "",
  type: "",
  years: [],
};

export const useGetData = () => {
  const [data, setData] = useState<ResultDataType>(defaultData);
  const [aveData, setAveData] = useState<number>(0);

  /**
   * 条件に一致するjsonデータを取得
   * @param {object} params - 表示条件
   */
  const getData = (params: selectedParamType) => {
    const filteredData = JsonData.filter((item: AllDataType) => {
      return (
        item.prefectureCode === params.prefectureCode &&
        item.year === params.year &&
        item.type === params.type
      );
    }).map((item) => item.data.result); // resultのみを取得

    setData(filteredData[0]);
  };

  /**
   * 表示条件と同年度の関東平均を取得
   * @param {number} targetYear - 年度
   */
  const getAveData = (targetYear: number) => {
    // 年度に一致するデータをフィルタリング
    const filteredValues = JsonData.flatMap((item) => {
      return item.data.result.years
        .filter((yearData) => yearData.year === targetYear)
        .map((yearData) => yearData.value);
    });

    // 平均を計算
    const total = filteredValues.reduce((sum, value) => sum + value, 0);
    const aveValue =
      filteredValues.length > 0 ? total / filteredValues.length : 0;

    // 小数点以下を四捨五入してセット
    setAveData(Math.round(aveValue));
  };

  return { data, getData, aveData, getAveData };
};
