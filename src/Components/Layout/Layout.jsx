import "../Layout/layout.css";
import "../Search-bar/search.css";
import "../Info/info.css";
import "../Welcome/welcome.css";
import "../Monthly/monthly.css";
import "../Selling-product/selling.css";
import Nav from "../Nav/Nav";
import Search from "../Search-bar/Search";
import Info from "../Info/Info";
import Welcome from "../Welcome/Welcome";
import Monthly from "../Monthly/Monthly";
import Selling from "../Selling-product/Selling";

function Layout() {
  return (
    <body>
      <main className="main-grid">
        <div className="side-menu">
          <Nav />
        </div>
        <div className="main-content">
          <div className="search-bar">
            <Search />
          </div>
          <div className="welcome">
            <Welcome />
          </div>
          <div className="info-menu">
            <Info />
          </div>
          <div className="main-info">
            <div className="monthly">
              <Monthly />
            </div>
            <div className="selling-product">
              <Selling />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Layout;
