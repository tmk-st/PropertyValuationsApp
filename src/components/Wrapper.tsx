import backgroundImgUrl from "@/assets/background.png";

type Props = {
	children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
	return (
		<div
			className="h-full bg-cover bg-center"
			style={{ backgroundImage: `url(${backgroundImgUrl})` }}
		>
			<div className="absolute inset-0 bg-black/80 z-10" />
			<div className="relative z-20">{children}</div>
		</div>
	);
};

export default Wrapper;
