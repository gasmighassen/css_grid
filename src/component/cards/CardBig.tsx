import { EyeOutlined, PlayCircleFilled } from "@ant-design/icons";
import React from "react";
import "../../_dist/cardBig.css";

function CardBig(info: any) {
  const data = info.info;
  return (
    <div className="card-big">
      <div className="img-wrap-card">
        <img src={data.url} alt="" />
      </div>
      <div className="card-content">
        <div className="card-upper">
          {data.icon}
          <button className={`${data.buttonType}` + " btn"}>
            {data.buttonType}
          </button>
        </div>

        <h2 className="card-title">
          <a href="">{data.header}</a>
        </h2>

        <p>{data.text}</p>

        <div className="card-lower">
          <div className="profile-img">
            <img src={data.userImg} alt="" />
          </div>

          <div className="views">
            {" "}
            <p>{data.userName}</p>
            <EyeOutlined />
            <span>{data.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBig;
