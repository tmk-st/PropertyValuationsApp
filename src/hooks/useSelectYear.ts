import { callbackType } from "@/types";

/**
 * 年度選択時のカスタムフック
 */
const useSelectYear = (callback: callbackType) => {
  // 年度選択時の処理
  const handleSelect = (yearStr: string) => {
    callback(Number(yearStr));
  };

  return { handleSelect };
};

export default useSelectYear;
