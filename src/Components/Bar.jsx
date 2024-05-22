import React from "react";
import "./Bar.css";

const Bar = (props) => {
  return (
    <div>
      <div className="bar">
        <div className="image">
          <img className="plate" src={props.src} alt="" />
        </div>
        <div className="head">
          <div className="title">
            {props.title}{props.underscore}{props.price}
          </div>
          <div className="desc">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};

Bar.defaultProps = {
  src: "public/img/pg4-plate.png",
  desc: "Nulla dapibus tempus malesuada.",
};

export default Bar;
