import {
  CameraFilled,
  CameraOutlined,
  EyeOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";
import "../_dist/main.css";

function Main() {
  return (
    <div className="main-content">
      <div className="title-1">
        <h1>Editor’s pick</h1>
      </div>
      <div className="card-1 big">
        <div className="img-wrap-card">
          <img
            src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-upper">
            <PlayCircleFilled />
            <button className="btn entertaiment">entertaiment</button>
          </div>

          <h2 className="card-title">
            <a href="">Are rock concerts really coming back into fashion?</a>
          </h2>

          <p>
            Monotonectally pursue backward-compatible ideas without empowered
            imperatives. Interactively predominate low-risk high-yield ROI
            rather than adaptive e-tailers....
          </p>

          <div className="card-lower">
            <div className="profile-img">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg"
                alt=""
              />
            </div>

            <div className="views">
              {" "}
              <p>Patricia Callahan</p>
              <EyeOutlined />
              <span>38,689 views</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div>
          <button className="btn technology">technology</button>
          <h1>The world needs true geniuses now more than ever</h1>
        </div>
        <div className="card-lower">
          <div className="profile-img">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg"
              alt=""
            />
          </div>

          <div className="views">
            <p>Patricia Callahan</p>
          </div>
        </div>
      </div>
      <div className="card-3 no-bg">
        <div className="upper">
          <button className="btn technology">technology</button>
          <h2 className="card-title">
            <a href="">Does a blog post look better with a featured image?</a>
          </h2>
          <p className="para">
            Authoritatively pontificate synergistic total linkage and pandemic
            metrics. Assertively initiate interactive architectures with
            end-to-end meta-services. Conveniently build...
          </p>
        </div>
        <div className="card-lower">
          <div className="profile-img">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg"
              alt=""
            />
          </div>

          <div className="views">
            <p>Patricia Callahan</p>
          </div>
        </div>
      </div>
      <div className="card-4">
        <div className="img-up">
          <button className="btn travel">travel</button>
          <img
            src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_01-370x150.jpg"
            alt=""
          />
        </div>
        <div className="down-section">
          <h2 className="card-title">
            <a href="">Does a blog post look better with a featured image?</a>
          </h2>
          <div className="card-lower">
            <div className="profile-img">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_5_1473333966-24x24.jpg"
                alt=""
              />
            </div>

            <div className="views">
              <p>Joana Bergstein</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-5"></div>
      <div className="title-2">
        <h1>This week’s hottest</h1>
      </div>
      <div className="card-6 big">
        <div className="img-wrap-card">
          <img
            src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_13-335x300.jpg"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-upper">
            <CameraOutlined />
            <button className="btn food-drinks">food & drinks</button>
          </div>

          <h2 className="card-title">
            <a href="">With good typography you don’t actually need images</a>
          </h2>

          <p>
            Distinctively coordinate pandemic technologies rather than
            market-driven meta-services. Distinctively reconceptualize high
            standards in...
          </p>

          <div className="card-lower">
            <div className="profile-img">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_5_1473333966-24x24.jpg"
                alt=""
              />
            </div>

            <div className="views">
              {" "}
              <p>Joana Bergstein</p>
              <EyeOutlined />
              <span>12,964 views</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-7"></div>
      <div className="card-8">
        {" "}
        <h3 className="a8">a</h3>
        <h3 className="b8">b</h3>
      </div>
      <div className="card-9">a</div>
      <div className="card-10">
        <h3 className="a10">a</h3>
        <h3 className="b10">b</h3>
      </div>
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
