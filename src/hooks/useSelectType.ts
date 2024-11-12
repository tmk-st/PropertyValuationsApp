import type { callbackType } from "@/types";

/**
 * 種別選択時のカスタムフック
 */
const useSelectType = (callback: callbackType) => {
	// 選択時の処理
	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value);
		callback(newValue);
	};

	return { handleOptionChange };
};

export default useSelectType;
