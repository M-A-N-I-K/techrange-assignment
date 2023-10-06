import Header from "../Components/Header";
import Main from "../Components/Main";

const Home = () => {
	return (
		<div className="area fixed">
			<ul className="circles overflow-y-scroll">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<div className="overflow-y-scroll">
					<Header />
					<Main />
				</div>
			</ul>
		</div>
	);
};

export default Home;
