import "./App.css";
import { Header, Footer, Title } from "@/components";
import FilteringContainer from "./features/filtering/FilteringContainer";
import GraphContainer from "./features/graph/GraphContainer";
import Background from "./components/Wrapper";
import { useGetData } from "@/hooks/useGetData";

const App = () => {
  const { data, getData } = useGetData();
  return (
    <>
      <Header />
      <div className="relative font-SANS">
        <Background>
          <div className="h-[956px]">
            <div className="p-10">
              <Title />
            </div>
            <div className="flex">
              <GraphContainer data={data} />
              <FilteringContainer getData={getData} />
            </div>
          </div>
          <Footer />
        </Background>
      </div>
    </>
  );
};

export default App;
