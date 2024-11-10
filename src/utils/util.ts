/**
 * 空オブジェクト判定
 * @param {object | null} obj - 対象オブジェクト
 * @returns {boolean} - 空の場合true
 */
export const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0 || obj === null;
};
