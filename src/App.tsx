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
			<div className="relative font-SANS overflow-x-hidden">
				<Background>
					<div className="h-[956px] w-[1920px] flex justify-center">
						<div className="flex flex-col w-[1840px] justify-evenly">
							<div>
								<Title />
							</div>
							<div className="flex justify-between h-[780px]">
								<GraphContainer data={data} />
								<FilteringContainer getData={getData} />
							</div>
						</div>
					</div>
				</Background>
				<div className="relative z-10">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default App;
