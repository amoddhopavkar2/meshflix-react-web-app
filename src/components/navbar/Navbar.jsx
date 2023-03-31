import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="wd-navbar">
      <div className="wd-container">
        <div className="wd-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Meshflix Logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="wd-right">
          <Search className="wd-icons"/>
          <span>KID</span>
          <Notifications className="wd-icons"/>
          <img
            src="https://media.tenor.com/BrD7r8OL4hkAAAAC/psyduckpc.gif"
            alt="Profile Picture"
          />
          <ArrowDropDown className="wd-icons"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
