import { FaDollarSign } from "react-icons/fa";

import Diagrama from "../Img/diagrama.png";

function Monthly() {
  return (
    <>
      <div className="top">
        <div className="news">
          <div className="cont">
            <div className="img">
              <div className="burbulas">
                <FaDollarSign style={{ color: "white", fontSize: "1.2em" }} />
              </div>
              <span className="name" style={{ color: "grey", fontWeight: 600 }}>
                Monthly Recurring Revenue
              </span>
            </div>
            <p>Income</p>
            <h1>
              <FaDollarSign style={{ color: "skyblue", fontSize: "0.6em" }} />
              156,098.1
            </h1>
            <span>
              <span style={{ color: "limegreen" }}>2.9%</span> vs $300.3k last
              year
            </span>
          </div>
          <img src={Diagrama} alt="" className="diagrama" />
        </div>
        <div className="cont2">
          <div className="img"></div>
          <p>Spend</p>
          <h1>
            <FaDollarSign style={{ color: "skyblue", fontSize: "0.6em" }} />
            80,112.02
          </h1>
          <span>
            <span style={{ color: "limegreen" }}>2.9%</span> vs $300.3k last
            year
          </span>
        </div>
      </div>
    </>
  );
}
export default Monthly;
