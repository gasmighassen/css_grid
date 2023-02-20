import { FC } from "react";
import "../../_dist/cardBg.css";

interface props {
  bgCard?: {
    bgImg: string;
    buttonType: string;
    header: string;
    userImg: string;
    userName: string;
  };
}

const CardBg: FC<props> = ({ bgCard }) => {
  return (
    <div className="cardBg">
      <div className="cardBg-content">
        <img src={bgCard?.bgImg} alt="" className="card-bgimage" />
        <div className="cardbg-upper">
          <button className={`${bgCard?.buttonType}` + " btn"}>
            {bgCard?.buttonType}
          </button>
          <h1>{bgCard?.header}</h1>
        </div>
        <div className="card-lower">
          <div className="profile-img">
            <img src={bgCard?.userImg} alt="" />
          </div>

          <div className="views">
            <p>{bgCard?.userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBg;
