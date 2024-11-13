import { SelectBox, Divider } from "@/components";
import { PREFECTURE } from "@/constants/const";
import useSelectLocation from "@/hooks/useSelectLocation";
import type { callbackType } from "@/types";
import { FaLocationDot } from "react-icons/fa6";

type Props = {
	callback: callbackType;
};

const SelectLocation: React.FC<Props> = ({ callback }) => {
	const { handleSelect } = useSelectLocation(callback);

	// 県名の配列
	const prefectureNames = PREFECTURE.map((pref) => pref.name);

	return (
		<div>
			<div className="w-[309px] h-[88px] flex justify-between items-center">
				<div className="flex gap-1 items-center">
					<FaLocationDot />
					<span className="text-sm">場所</span>
				</div>
				<SelectBox options={prefectureNames} callback={handleSelect} />
			</div>
			<Divider />
		</div>
	);
};

export default SelectLocation;
