import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listReference = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listReference.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listReference.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listReference.current.style.transform = `translateX(${
        -230 + distance
      }px)`;
    }
  };

  return (
    <div className="wd-list-container">
      <span className="wd-list-title">Continue to watch</span>
      <div className="wd-list-wrapper">
        <ArrowBackIosOutlined
          className="wd-slider-arrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="wd-list-item-container" ref={listReference}>
          <ListItem index = {0} />
          <ListItem index = {1}  />
          <ListItem index = {2}  />
          <ListItem index = {3}  />
          <ListItem index = {4}  />
          <ListItem index = {5}  />
          <ListItem index = {6}  />
          <ListItem index = {7}  />
          <ListItem index = {8}  />
          <ListItem index = {9}  />
          <ListItem index = {10}  />
          <ListItem index = {11}  />
          <ListItem index = {12}  />
          <ListItem index = {13}  />
          <ListItem index = {14}  />
        </div>
        <ArrowForwardIosOutlined
          className="wd-slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
