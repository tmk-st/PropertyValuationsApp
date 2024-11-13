type Props = {
	handleClick: () => void;
	isCursorNotAllowed: boolean;
	children: string;
};

const Button: React.FC<Props> = ({
	handleClick,
	isCursorNotAllowed,
	children,
}) => {
	return (
		<button
			className={`${isCursorNotAllowed ? "cursor-not-allowed w-[311px] h-[52px] text-white bg-gray-400" : "w-[311px] h-[52px] text-white bg-KEY"}`}
			onClick={handleClick}
			type="button"
		>
			{children}
		</button>
	);
};

export default Button;
