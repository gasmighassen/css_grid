import React from "react";
import "../../_dist/cardBg.css";
function CardBg(info: any) {
  const data = info.info;
  return (
    <div className="cardBg">
      <div className="cardBg-content">
        <img src={data.bgImg} alt="" className="card-bgimage" />
        <div className="cardbg-upper">
          <button className={`${data.buttonType}` + " btn"}>
            {data.buttonType}
          </button>
          <h1>{data.header}</h1>
        </div>
        <div className="card-lower">
          <div className="profile-img">
            <img src={data.userImg} alt="" />
          </div>

          <div className="views">
            <p>{data.userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBg;
