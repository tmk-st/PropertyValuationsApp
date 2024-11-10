import useDisplayCond from "@/hooks/useDisplayCond";
import { ResultDataType } from "@/types";
import { FaLocationDot, FaCalendarCheck, FaShapes } from "react-icons/fa6";

type Props = {
  data: ResultDataType;
};

const DisplayCond: React.FC<Props> = ({ data }) => {
  const { typeStr, prefectureName, year } = useDisplayCond(data);
  
  return (
    <div className="flex text-white w-[498px] h-[30px] justify-between text-2xl">
      <div className="flex items-center gap-2">
        <FaLocationDot />
        <span>{prefectureName}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaCalendarCheck />
        <span>{year}年</span>
      </div>
      <div className="flex items-center gap-2">
        <FaShapes />
        <span>{typeStr}</span>
      </div>
    </div>
  );
};

export default DisplayCond;