import "./nav.css";
import Icon3 from "../Img/icon3.png";
import Icon2 from "../Img/icon2.png";
import Icon4 from "../Img/icon4.png";
import Icon5 from "../Img/icon5.png";
import Icon6 from "../Img/icon6.png";
import Icon7 from "../Img/icon7.png";
import Icon8 from "../Img/icon8.png";
import Icon9 from "../Img/icon9.png";
import Icon10 from "../Img/icon10.png";
import Num2 from "../Img/num2.png";
import Num11 from "../Img/num11.png";
import Dark from "../Img/dark.png";
import Logo from "../Img/logo.png";
import { FaAngleDown } from "react-icons/fa";

function Nav() {
  return (
    <>
      <img src={Logo} alt="" className="logo" />
      <div className="nav">
        <div className="nav-btn dark">
          <img src={Icon2} alt="Logo" className="img" />
          <a href="###" className="tag">
            Dashboard
          </a>
        </div>
        <div className="nav-btn">
          <img src={Icon3} alt="Logo" className="img" />
          <a href="###" className="tag">
            Product
          </a>
          <img src={Num2} alt="Logo" className="img2" />
        </div>
        <div className="nav-btn">
          <img src={Icon4} alt="Logo" className="img" />
          <a href="###" className="tag">
            Store
          </a>
        </div>
        <div className="nav-btn">
          <img src={Icon5} alt="Logo" className="img" />
          <a href="###" className="tag">
            Visitor
          </a>
        </div>
        <div className="nav-btn">
          <img src={Icon6} alt="Logo" className="img" />
          <a href="###" className="tag">
            Analytics
            <FaAngleDown
              style={{ color: "#aaaaaa", fontSize: "1.2em", marginLeft: 100 }}
            />
          </a>
        </div>
        <div className="nav-btn">
          <img src={Icon7} alt="Logo" className="img" />
          <a href="###" className="tag">
            Notification
          </a>
          <img src={Num11} alt="Logo" className="img2" />
        </div>
        <div className="nav-btn group">
          <img src={Icon8} alt="Logo" className="img" />
          <a href="###" className="tag">
            Help Center
          </a>
        </div>
        <div className="nav-btn">
          <img src={Icon9} alt="Logo" className="img" />
          <a href="###" className="tag">
            Product
          </a>
        </div>
        <div className="nav-footer">
          <img src={Icon10} alt="Logo" className="img" />
          <a href="###" className="tag">
            Dark Mode
          </a>
          <img src={Dark} alt="Logo" className="img3" />
        </div>
      </div>
    </>
  );
}

export default Nav;
