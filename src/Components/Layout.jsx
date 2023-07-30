import "./layout.css";

function Layout() {
  return (
    <body>
      <main className="main-grid">
        <div className="side-menu">
          <div className="search-bar"></div>
          <div className="welcome"></div>
          <div className="info-menu"></div>
          <div className="main-info">
            <div className="monthly"></div>
            <div className="product"></div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Layout;
