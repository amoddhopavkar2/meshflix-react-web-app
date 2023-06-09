import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listItem.scss";
import { useState } from "react";

const ListItem = (index) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="wd-list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
      <>
      <video src={trailer} autoPlay={true} loop />

      <div className="wd-item-info-container">
        <div className="wd-icons-container">
          <PlayArrow className="wd-icons"/>
          <Add className="wd-icons"/>
          <ThumbUpAltOutlined className="wd-icons"/>
          <ThumbDownAltOutlined className="wd-icons"/>
        </div>

        <div className="wd-item-info-top">
          <span>1 hour 14 mins</span>
          <span className="wd-age-limit-container">+16</span>
          <span>1999</span>
        </div>

        <div className="wd-item-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem porro nobis iure labore impedit reprehenderit.
        </div>

        <div className="wd-item-genre">Action</div>
      </div>
      </>)}
    </div>
  );
};

export default ListItem;
