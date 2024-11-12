import type { ResultDataType } from "@/types";
import DisplayCond from "./DisplayCond";
import Graph from "./Graph";
import { isEmptyObject } from "@/utils/util";

type Props = {
	data: ResultDataType;
};

const GraphContainer: React.FC<Props> = ({ data }) => {
	return (
		<div>
			<div className="w-[1457px] h-[780px] flex flex-col justify-around items-center">
				{!isEmptyObject(data) && (
					<>
						<DisplayCond data={data} />
						<Graph data={data} />
					</>
				)}
			</div>
		</div>
	);
};

export default GraphContainer;
