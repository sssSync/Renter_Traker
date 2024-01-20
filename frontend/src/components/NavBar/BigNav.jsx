import { Link } from "react-router-dom";

const BigNav = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <span>Logo</span>
        </div>

        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/roomadd">AddRoom</Link>
            </li>
          </ul>
        </div>
        <div className="cta_btns">
          <Link to="/login">
            <button className="">Log in</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BigNav;
