// 絞り込み条件のオブジェクト型
export type selectedParamType = {
  prefectureCode: number;
  year: number;
  type: number;
};

// 各絞り込み条件のコールバック関数型
export type callbackType = (value: number) => void;

// 取得データのセッター関数型
export type GetDataType = (params: selectedParamType) => void;

// 全データの型
export type AllDataType = {
  year: number;
  prefectureCode: number;
  type: number;
  data: {
    result: {
      prefectureCode: string;
      prefectureName: string;
      type: string;
      years: {
        year: number;
        value: number;
      }[];
    };
  };
};

// resultデータの型
export type ResultDataType = {
  prefectureCode: string;
  prefectureName: string;
  type: string;
  years: {
    year: number;
    value: number;
  }[];
};

// グラフ表示時のX軸カスタム関数の型
export type CustomTickProps = {
  x: number;
  y: number;
  payload: { value: string };
  index: number;
};
