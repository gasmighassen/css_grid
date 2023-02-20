import {
  CameraFilled,
  CameraOutlined,
  EyeOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";
import { useState } from "react";
import "../_dist/main.css";
import CardBg from "./cards/CardBg";
import CardBig from "./cards/CardBig";
import CardHalfBg from "./cards/CardHalfBg";

function Main() {
  const bigCard = [
    {
      url: "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg",
      buttonType: "entertaiment",
      icon: <PlayCircleFilled />,
      header: "Are rock concerts really coming back into fashion?",
      text: "Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate low-risk high-yield ROI...",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg",
      userName: "Patricia Callahan",
      views: "38,690",
    },
    {
      url: "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_13-335x300.jpg",
      buttonType: "food-drinks",
      icon: <CameraOutlined />,
      header: "With good typography you don’t actually need images",
      text: "Distinctively coordinate pandemic technologies rather than market-driven...",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_5_1473333966-24x24.jpg",
      userName: "Joana Bergstein",
      views: "12,964",
    },
  ];

  const bgCard = [
    {
      bgImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_24-370x300.jpg",
      buttonType: "technology",
      header: "The world needs true geniuses now more than ever",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg",
      userName: "Patricia Callahan",
    },
    {
      bgImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_28-270x300.jpg",
      buttonType: "entertaiment",
      header: "Cards look so good with a splash of color on the categories",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg",
      userName: "Lisa Scholfield",
    },
  ];
  const CardNoBg = [
    {
      buttonType: ["technology", "travel"],
      header: "Does a blog post look better with a featured image?",
      text: "Authoritatively pontificate synergistic total linkage and pandemic metrics. Assertively...",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg",
      userName: "Patricia Callahan",
    },
    {
      buttonType: ["travel"],
      header: "Cards look so good with a splash of color on the categories",
      text: "Authoritatively pontificate synergistic total linkage and pandemic metrics. Assertively...",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg",
      userName: "Lisa Scholfield",
    },
    {
      buttonType: ["food & drinks"],
      header: "Cards look so good with a splash of color on the categories",
      text: "Authoritatively pontificate synergistic total linkage and pandemic metrics. Assertively...",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg",
      userName: "Lisa Scholfield",
    },
  ];
  const cardHalfBg = [
    {
      imgBg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_01-370x150.jpg",
      buttonType: "life style",
      header: "If you’re truly happy and you know it let it show",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_5_1473333966-24x24.jpg",
      userName: "Joana Bergstein",
    },
    {
      imgBg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_23-370x150.jpg",
      buttonType: "travel",
      header: "Australia is the ultimate place in the world for...",
      userImg:
        "https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg",
      userName: "Lisa Scholfield",
    },
  ];

  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="main-content">
      <div className="title-1">
        <h1>Editor’s pick</h1>
      </div>
      <div className={!show ? "card-1" : "card-1-clicked"}>
        <CardBig bigCard={bigCard[0]} setShow={setShow} show={show} />
      </div>
      <div className={!show ? "card-2" : "card-2-clicked"}>
        <CardBg bgCard={bgCard[0]} />
      </div>
      <div className="card-3"> </div>
      <div className="card-4"> </div>
      <div className="card-5"> </div>
      <div className="title-2">
        <h1>This week’s hottest</h1>
      </div>
      <div className="card-6"></div>
      <div className="card-7"> </div>
      <div className="card-8"></div>
      <div className="card-9">
        <CardHalfBg />
      </div>
      <div className="card-10"></div>
      <div className="title-3">
        <h1>Latest articles</h1>
      </div>
      <div className="card-11">a</div>
      <div className="card-12">a</div>
      <div className="card-13">a</div>
      <div className="card-14">a</div>
      <div className="card-15">a</div>
      <div className="card-16">a</div>
      <div className="card-17">a</div>
      <div className="card-18">a</div>
      <div className="card-19">a</div>
      <div className="card-20">a</div>
      <div className="card-21">a</div>
      <div className="card-22">a</div>
      <div className="button-wrap">
        <button>load more</button>
      </div>
    </div>
  );
}

export default Main;
