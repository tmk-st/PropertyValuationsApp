type Props = {
	options: number[] | string[];
	callback: (value: string) => void;
	appendText?: string;
};

const SelectBox: React.FC<Props> = ({ options, callback, appendText }) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		callback(event.target.value);
	};

	return (
		<div className="flex text-sm">
			<select
				defaultValue=""
				onChange={handleChange}
				className="w-60 h-10 p-2 rounded-sm cursor-pointer"
			>
				<option value="" disabled>
					選択してください
				</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
						{/* appendTextが指定されている場合のみ追加 */}
						{appendText && `${appendText}`}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectBox;
