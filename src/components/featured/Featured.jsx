import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="wd-featured">
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="Profile Picture"
      />
      <div className="wd-info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="wd-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, nihil
          optio? Officiis consequuntur corporis tenetur veniam molestias
          quibusdam enim laudantium, impedit aut earum quod dolores voluptatem
          repellendus tempora voluptas qui?
        </span>
        <div className="wd-buttons-container">
            <button className="wd-play-button">
                <PlayArrow />
                <span>Play</span>
            </button>
            <button className="wd-more-info-button">
                <InfoOutlined />
                <span>More Info</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
