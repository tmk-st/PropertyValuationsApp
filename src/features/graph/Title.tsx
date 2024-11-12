import { IconContext } from "react-icons";
import { FaSquarePollVertical } from "react-icons/fa6";
const Title = () => {
	return (
		<>
			<div className="text-white h-14 flex gap-2">
				<div className="self-center">
					<IconContext.Provider value={{ size: "30px" }}>
						<FaSquarePollVertical />
					</IconContext.Provider>
				</div>
				<h1 className="text-[32px] flex item-center leading-relaxed">
					取引価格
				</h1>
				<span className="text-sm flex items-end leading-10">
					※取引面積1㎡あたり
				</span>
			</div>
			<div className="border-t border-gray-600" />
		</>
	);
};

export default Title;
