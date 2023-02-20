import { EyeOutlined, PlayCircleFilled } from "@ant-design/icons";
import React from "react";
import "../../_dist/cardBig.css";

interface props {
  bigCard?: {
    url: string;
    buttonType: string;
    icon: JSX.Element;
    header: string;
    text: string;
    userImg: string;
    userName: string;
    views: string;
  };
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}

const CardBig: React.FC<props> = ({ bigCard, setShow, show }) => {
  return (
    <div className="card-big">
      <div className="img-wrap-card">
        <img src={bigCard?.url} alt="" />
      </div>
      <div className="card-content">
        <div className="card-upper">
          {bigCard?.icon}
          <button className={`${bigCard?.buttonType}` + " btn"}>
            {bigCard?.buttonType}
          </button>
        </div>

        <h2 className="card-title">
          <a href="">{bigCard?.header}</a>
        </h2>

        <p>{bigCard?.text}</p>

        <div className="card-lower">
          <div className="profile-img">
            <img src={bigCard?.userImg} alt="" />
          </div>

          <div className="views">
            {" "}
            <p>{bigCard?.userName}</p>
            <EyeOutlined />
            <span>{bigCard?.views} views</span>
            <button onClick={(e) => setShow(!show)}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBig;
