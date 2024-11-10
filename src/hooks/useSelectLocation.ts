import { useState } from "react";
import { PREFECTURE } from "@/constants/const";

type UseSelectLocationType = (callback: (code: number) => void) => {
  handleSelect: (name: string) => void;
};

/**
 * 場所選択時のカスタムフック
 */
const useSelectLocation: UseSelectLocationType = (callback) => {
  useState<number>(0);

  // 場所選択時の処理
  const handleSelect = (name: string) => {
    const prefecture = PREFECTURE.find((pref) => pref.name === name);
    const prefectureCode = prefecture ? prefecture.code : 0;
    callback(prefectureCode);
  };

  return {
    handleSelect,
  };
};

export default useSelectLocation;
