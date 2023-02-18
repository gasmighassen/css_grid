import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import "../_dist/navbar.css";

function Navbar() {
  return (
    <div className="fullNavbar">
      <div className="upper-nav">
        <div className="upper-logo">
          <img
            src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            alt=""
          />
        </div>
        <div className="buy-container">
          <button className="buy-now">Buy now</button>
        </div>
      </div>
      <div className="navbar">
        <div className="logo-container">
          <img
            src="https://demo.mekshq.com/gridlove/wp-content/themes/gridlove/assets/img/gridlove_logo@2x.png"
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#" className="colored">
                Home
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#">Laptops</a>
                </li>
                <li>
                  <a href="#">Monitors</a>
                </li>
                <li>
                  <a href="#">Printers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Modules</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Laptops</a>
                </li>
                <li>
                  <a href="#">Monitors</a>
                </li>
                <li>
                  <a href="#">Printers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Posts</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Laptops</a>
                </li>
                <li>
                  <a href="#">Monitors</a>
                </li>
                <li>
                  <a href="#">Printers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Archives</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Laptops</a>
                </li>
                <li>
                  <a href="#">Monitors</a>
                </li>
                <li>
                  <a href="#">Printers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Laptops</a>
                </li>
                <li>
                  <a href="#">Monitors</a>
                </li>
                <li>
                  <a href="#">Printers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Features</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Laptops</a>
                </li>
                <li>
                  <a href="#">Monitors</a>
                </li>
                <li>
                  <a href="#">Printers</a>
                </li>
              </ul>
            </li>
            <li>
              <SearchOutlined />
            </li>
            <li>
              <MenuOutlined />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
