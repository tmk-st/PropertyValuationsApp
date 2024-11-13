import { IconContext } from "react-icons";
import { FaSquarePollVertical } from "react-icons/fa6";
import Divider from "./Divider";
const Title = () => {
	return (
		<>
			<div className="text-white h-[56px] flex gap-2">
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
			<Divider />
		</>
	);
};

export default Title;
