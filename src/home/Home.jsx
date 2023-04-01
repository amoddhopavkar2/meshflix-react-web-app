import Featured from "../components/featured/Featured";
import List from "../components/list/List";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return <div className="wd-home">
    <Navbar />
    <Featured />
    <List />
  </div>;
};

export default Home;
