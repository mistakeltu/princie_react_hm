import "../Layout/layout.css";
import Nav from "../Nav/Nav";

function Layout() {
  return (
    <body>
      <main className="main-grid">
        <div className="side-menu">
          <Nav />
        </div>
        <div className="main-content">
          <div className="search-bar"></div>
          <div className="welcome"></div>
          <div className="info-menu">
            <div className="net-profit"></div>
            <div className="store"></div>
            <div className="product"></div>
            <div className="visitor"></div>
          </div>
          <div className="main-info">
            <div className="monthly"></div>
            <div className="selling-product"></div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Layout;
