import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef } from "react";

const List = () => {

    const listReference = useRef()

    const handleClick = (direction) => {
        let distance = listReference.current.getBoundingClientRect().x - 50;
        if (direction === "left") {
            listReference.current.style.transform = `translateX(${230 + distance}px)`
        }
        else if (direction === "right") {
            listReference.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

  return (
    <div className="wd-list-container">
      <span className="wd-list-title">Continue to watch</span>
      <div className="wd-list-wrapper">
        <ArrowBackIosOutlined className="wd-slider-arrow left" onClick={() => handleClick("left")} />
        <div className="wd-list-item-container" ref={listReference} >
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          
        </div>
        <ArrowForwardIosOutlined className="wd-slider-arrow right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
};

export default List;
