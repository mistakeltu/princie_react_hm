import Zoom from "../Img/zoom.png";
import Icon12 from "../Img/icon12.png";
import Icon11 from "../Img/icon11.png";

function Search() {
  return (
    <>
      <div className="search-bar">
        <img src={Zoom} alt="Logo" className="img" />
        <a href="###" className="tag">
          Search anything...
        </a>
      </div>
      <div className="personal-info">
        <img src={Icon12} alt="Logo" className="img" />
        <div className="info">
          <span>
            <b style={{ color: "black" }}>Maxie Mon Wachid</b>
          </span>
          <span>@Maxie Mon Wachid</span>
        </div>
      </div>
      <img src={Icon11} alt="Logo" className="varpas" />
    </>
  );
}
export default Search;
