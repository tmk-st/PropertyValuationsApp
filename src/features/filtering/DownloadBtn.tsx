import { Button } from "@/components";
import { GetDataType, selectedParamType } from "@/types";

type Props = {
  params: selectedParamType;
  getData: GetDataType;
};

const DownloadBtn: React.FC<Props> = ({ params, getData }) => {
  return (
    <div>
      <Button handleClick={() => getData(params)}>表示する</Button>
    </div>
  );
};

export default DownloadBtn;
