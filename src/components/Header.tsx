import logoImgUrl from "@/assets/logo-landit.png";

const Header = () => {
	return (
		<div className="h-[74px] flex items-center bg-white">
			<div className="w-[233px] h-[60px] flex justify-center items-center">
				<a href="/">
					<img src={logoImgUrl} className="w-[180px] h-[41px]" alt="logo" />
				</a>
			</div>
		</div>
	);
};

export default Header;
