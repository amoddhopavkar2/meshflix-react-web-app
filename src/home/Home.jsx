import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return <div className="wd-home">
    <Navbar />
    <Featured type="series" />
  </div>;
};

export default Home;
