import type { ResultDataType } from "@/types";

/**
 * オブジェクトの値の空判定
 * @param {object | null} obj - 対象オブジェクト
 * @returns {boolean} - 空の場合true
 */
export const isEmptyObject = (obj: ResultDataType) => {
	return (
		obj === null ||
		Object.values(obj).every((value) => value === "" || value.length === 0)
	);
};
