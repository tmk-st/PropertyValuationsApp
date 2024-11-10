import { useState } from "react";
import { selectedParamType } from "@/types";

/**
 * 表示条件の絞り込み時のカスタムフック
 */
const useFiltering = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<number>(0);

  // データ取得条件
  const params: selectedParamType = {
    prefectureCode: selectedPrefecture,
    year: selectedYear,
    type: selectedType,
  };

  return {
    setSelectedPrefecture,
    setSelectedYear,
    selectedType,
    setSelectedType,
    params,
  };
};

export default useFiltering;
