import "../_dist/carousel.css";
import { Carousel } from "antd";
import { LeftOutlined } from "@ant-design/icons/lib/icons";
import { RightOutlined } from "@ant-design/icons/lib/icons";
import { useRef } from "react";

function CarouselAntd() {
  const ref = useRef() as any;
  return (
    <div className="carousel-container">
      <Carousel ref={ref} autoplay dots={false}>
        <div className="caro-item">
          <div className="img-wrap">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_02-1500x500.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <button className="btn food-drinks">FOOD & DRINKS</button>
            <h1>Did you know that plants actually have a secret life?</h1>
            <p>
              Authoritatively negotiate resource leveling experiences without
              prospective best practices. Holisticly engineer timely portals and
              holistic potentialities. Credibly negotiate high payoff
              functionalities...
            </p>
          </div>
        </div>
        <div className="caro-item">
          <div className="img-wrap">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_37-1500x500.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <button className="btn food-drinks">FOOD & DRINKS</button>
            <h1>Did you know that plants actually have a secret life?</h1>
            <p>
              Authoritatively negotiate resource leveling experiences without
              prospective best practices. Holisticly engineer timely portals and
              holistic potentialities. Credibly negotiate high payoff
              functionalities...
            </p>
          </div>
        </div>
        <div className="caro-item">
          <div className="img-wrap">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_15-1500x500.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <button className="btn life-style">LIFE STYLE</button>
            <h1>Did you know that plants actually have a secret life?</h1>
            <p>
              Authoritatively negotiate resource leveling experiences without
              prospective best practices. Holisticly engineer timely portals and
              holistic potentialities. Credibly negotiate high payoff
              functionalities...
            </p>
          </div>
        </div>
      </Carousel>
      <div className="action-caro">
        <LeftOutlined onClick={() => ref.current.prev()} />

        <RightOutlined onClick={() => ref.current.next()} />
      </div>
    </div>
  );
}

export default CarouselAntd;
