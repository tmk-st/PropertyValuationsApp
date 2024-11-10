import { useState } from "react";
import { Divider } from "@/components";
import SelectLocation from "./SelectLocation";
import SelectYear from "./SelectYear";
import SelectType from "./SelectType";
import DownloadBtn from "./DownloadBtn";
import { GetDataType, selectedParamType } from "@/types";
import useFiltering from "@/hooks/useFiltering";

type Props = {
  getData: GetDataType;
};

const FilteringContainer: React.FC<Props> = ({ getData }) => {
  const {
    setSelectedPrefecture,
    setSelectedYear,
    selectedType,
    setSelectedType,
    params,
  } = useFiltering();

  return (
    <div className="bg-BG w-[359px] h-[780px] p-6 flex flex-col justify-between rounded">
      <div>
        <div className="w-[311px] h-12">
          <span>表示内容を選択</span>
        </div>
        <Divider />
        <SelectLocation callback={setSelectedPrefecture} />
        <SelectYear callback={setSelectedYear} />
        <SelectType callback={setSelectedType} checked={selectedType} />
      </div>
      <div>
        <DownloadBtn params={params} getData={getData} />
      </div>
    </div>
  );
};

export default FilteringContainer;
