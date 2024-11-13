import { Button } from "@/components";
import type { GetDataType, selectedParamType } from "@/types";
import { isEmptyObject } from "@/utils/util";

type Props = {
	params: selectedParamType;
	getData: GetDataType;
};

const DownloadBtn: React.FC<Props> = ({ params, getData }) => {
	// フォーム未選択フラグ
	const isFormIncomplete = isEmptyObject(params);

	// ダウンロードボタン押下処理
	const handleClick = (params: selectedParamType) => {
		if (!isFormIncomplete) {
			getData(params);
		}
	};

	return (
		<div>
			<Button
				handleClick={() => handleClick(params)}
				isCursorNotAllowed={isFormIncomplete}
			>
				表示する
			</Button>
		</div>
	);
};

export default DownloadBtn;
