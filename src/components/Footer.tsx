import { Divider } from "@/components";
import { FaRegWindowRestore } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Footer: React.FC = () => {
	return (
		<>
			<Divider />
			<div className="flex justify-between items-center h-[50px] text-white px-10">
				<div className="flex w-[232px] flex justify-between items-center">
					<a href="/" className="flex items-center gap-2 cursor-pointer">
						<small className="text-xs">利用規約</small>
						<IconContext.Provider value={{ color: "gray", size: "12px" }}>
							<FaRegWindowRestore />
						</IconContext.Provider>
					</a>
					<a href="/" className="flex items-center gap-2 cursor-pointer">
						<small className="text-xs">プライバシーポリシー</small>
						<IconContext.Provider value={{ color: "gray", size: "12px" }}>
							<FaRegWindowRestore />
						</IconContext.Provider>
					</a>
				</div>
				<div>
					<small>©2023 Landit Inc.</small>
				</div>
			</div>
		</>
	);
};

export default Footer;
