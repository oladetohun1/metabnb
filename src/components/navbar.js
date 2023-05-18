import logo from "../Assets/images/Vectorlogo.png";
import text from "../Assets/images/Vectortext.png";
import {Link} from "react-router-dom";
import {useState } from "react";
import Hamburger from "hamburger-react";
function Navbar() {
  return (
    <header className="header">
      <div className="header__head">
      <div className="header__logo">
        <img src={logo} alt="" class="header__logo-icon" />
        <img src={text} alt="" class="header__logo-text" />
      </div>
      <div className="header__hamburger">
        <div className="sidemenu">
          <Sidemenu />
        </div>
      </div>
      </div>

      <nav className="header__nav">
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
        <div className="header__btn">
          <a href="##" class="header__btn-link">
            Connect wallet
          </a>
        </div>
      </nav>
    </header>
  );
}

function Sidemenu({dsplay}) {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Side display={isOpen}/>
    </>
  );
}
function Side({display}){
  return (
    <>
      {display && (
        <div className="sidemenu">
          <nav className="sidemenu__nav">
            <ul className="sidemenu__nav-list">
              <li className="sidemenu__nav-item">
                <Link to="/" className="sidemenu__nav-link">
                  Home
                </Link>
              </li>
              <li className="sidemenu__nav-item">
                <Link to="/place" className="sidemenu__nav-link">
                  Place to stay
                </Link>
              </li>
              <li className="sidemenu__nav-item">
                <a href="#NFT" className="sidemenu__nav-link">
                  NFTs
                </a>
              </li>
              <li className="sidemenu__nav-item">
                <a href="#community" className="sidemenu__nav-link">
                  Community
                </a>
              </li>
            </ul>
            <div className="sidemenu__btn">
              <a href="##" className="sidemenu__btn-link">
                Connect wallet
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
export default Navbar;
export { Sidemenu };
