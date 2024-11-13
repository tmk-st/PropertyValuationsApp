import type { ResultDataType, selectedParamType } from "@/types";

/**
 * オブジェクトの値の空判定
 * @param {object} obj - 対象オブジェクト
 * @returns {boolean} - 値が一つでもセットされていない場合true
 */
export const isEmptyObject = (obj: ResultDataType | selectedParamType) => {
	return Object.values(obj).some(
		(value) => value === "" || value === 0 || value.length === 0,
	);
};
