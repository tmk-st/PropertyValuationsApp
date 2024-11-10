type Props = {
  handleClick: () => void;
  children: string;
};

const Button: React.FC<Props> = ({handleClick, children}) => {
  return (
    <button className="w-[311px] h-[52px] text-white bg-KEY" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
