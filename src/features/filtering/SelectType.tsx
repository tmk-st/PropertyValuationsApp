import { RadioButton } from "@/components";
import { FaShapes } from "react-icons/fa6";
import { DISPLAY_TYPE } from "@/constants/const";
import type { callbackType } from "@/types";
import useSelectType from "@/hooks/useSelectType";

type Props = {
	callback: callbackType;
	checked: number;
};

const SelectType: React.FC<Props> = ({ callback, checked }) => {
	const { handleOptionChange } = useSelectType(callback);

	return (
		<div>
			<div className="w-[309px] h-[84px] flex justify-between items-end">
				<div className="h-[60px]">
					<div className="flex gap-1 items-center">
						<FaShapes />
						<span className="text-sm">種類</span>
					</div>
				</div>
				<div className="w-[239px] h-[60px] flex flex-col justify-between">
					<RadioButton
						options={DISPLAY_TYPE}
						handleOptionChange={handleOptionChange}
						checked={checked}
					/>
				</div>
			</div>
		</div>
	);
};

export default SelectType;
