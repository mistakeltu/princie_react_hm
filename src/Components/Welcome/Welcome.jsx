import { FaAngleDown } from "react-icons/fa";

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome back, Maxie</h1>
      <p style={{ color: "grey", fontSize: 16 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus
        officiis labore obcaecati eum beatae.
      </p>
      <div className="download">
        <span style={{ color: "grey", fontSize: 18 }}>Download report</span>
      </div>
      <div className="month">
        <img src="" alt="" />
        <span style={{ color: "grey", fontSize: 18 }}>
          This Month
          <FaAngleDown
            style={{
              color: "#aaaaaa",
              fontSize: "1em",
              marginLeft: 10,
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Welcome;
