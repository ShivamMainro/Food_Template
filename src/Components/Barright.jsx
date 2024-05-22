import React from "react";
import "./Barright.css";

const Barright = (props) => {
  return (
    <div>
      <div className="barright">
        <div className="head_right">
          <div className="title_right">
            {props.price}{props.underscore}{props.title}
          </div>
          <div className="desc_right">{props.desc}</div>
        </div>
        <div className="image_right">
          <img src={props.src} alt="" />
        </div>
      </div>
    </div>
  );
};

Barright.defaultProps = {
  src: "public/img/pg4-plate.png",
  desc: "Nulla dapusi tempus malesuada.",
};

export default Barright;
