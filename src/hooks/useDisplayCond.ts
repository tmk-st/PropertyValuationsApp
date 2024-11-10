import { useMemo } from "react";
import { DISPLAY_TYPE } from "@/constants/const";
import { ResultDataType } from "@/types";

/**
 * グラフの条件表示のカスタムフック
 */
const useDisplayCond = (data: ResultDataType) => {
  // 表示種別の名称を取得
  const getTypeStr = (type: string | number) => {
    const item = DISPLAY_TYPE.find((d) => d.id == type);
    return item ? item.value : null;
  };

  // 表示種別の日本語名
  // NOTE: オブジェクトが変更された場合のみ計算
  const typeStr = useMemo(() => getTypeStr(data.type), [data.type]);

  return {
    typeStr,
    prefectureName: data.prefectureName,
    year: data.years[0].year,
  };
};

export default useDisplayCond;
