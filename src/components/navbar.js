import logo from "../Assets/images/Vectorlogo.png";
import text from "../Assets/images/Vectortext.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header class="header">
      <div class="header__logo">
        <img src={logo} alt="" class="header__logo-icon" />
        <img src={text} alt="" class="header__logo-text" />
      </div>

      <nav class="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" class="header__nav-link">
              Home
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/place" class="header__nav-link">
              Place to stay
            </Link>
          </li>
          <li className="header__nav-item">
            <a href="#NFT" class="header__nav-link">
              NFTs
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#community" class="header__nav-link">
              Community
            </a>
          </li>
        </ul>
      </nav>
      <div class="header__btn">
        <a href="##" class="header__btn-link">
          Connect wallet
        </a>
      </div>
    </header>
  );
}

export default Navbar;
