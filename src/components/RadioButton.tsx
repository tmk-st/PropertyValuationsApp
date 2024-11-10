type Option = {
  id: number;
  value: string;
};

type Props = {
  options: Option[];
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: number;
};

const RadioButton: React.FC<Props> = ({
  options,
  handleOptionChange,
  checked,
}) => {
  return (
    <>
      {options.map((option) => (
        <label key={option.id} className="text-sm flex items-center gap-2 cursor-pointer w-fit">
          <input
            type="radio"
            value={option.id}
            checked={checked === option.id}
            onChange={handleOptionChange}
            className="h-6 w-6 border border-GRAY rounded-full bg-white cursor-pointer
                      before:rounded-full before:block before:w-3.5 before:h-3.5 before:content-[''] before:my-1 before:mx-1
                      checked:before:bg-KEY checked:border-KEY checked:border checked:bg-transparent"
            style={{ WebkitAppearance: "none" }}
          />
          {option.value}
        </label>
      ))}
    </>
  );
};

export default RadioButton;
