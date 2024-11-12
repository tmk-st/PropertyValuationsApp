import { SelectBox, Divider } from "@/components";
import { END_YEAR, START_YEAR } from "@/constants/const";
import useSelectYear from "@/hooks/useSelectYear";
import type { callbackType } from "@/types";
import { FaCalendarCheck } from "react-icons/fa6";

type Props = {
	callback: callbackType;
};

const SelectYear: React.FC<Props> = ({ callback }) => {
	const { handleSelect } = useSelectYear(callback);
	// データ提供年の配列
	const years = [];
	for (let i = START_YEAR; i <= END_YEAR; i++) {
		years.push(i);
	}

	return (
		<div>
			<div className="w-[311px] h-[88px] flex justify-between items-center">
				<div className="flex gap-1 items-center">
					<FaCalendarCheck />
					<span className="text-sm">年度</span>
				</div>
				<SelectBox options={years} callback={handleSelect} appendText="年" />
			</div>
			<Divider />
		</div>
	);
};

export default SelectYear;
