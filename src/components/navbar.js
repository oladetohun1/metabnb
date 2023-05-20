import logo from "../Assets/images/Vectorlogo.png";
import text from "../Assets/images/Vectortext.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import metamask from "../Assets/images/metamaskIcon.png";
import walletconnect from "../Assets/images/walletConnectIcon.png"; 
import drop from "../Assets/images/redirectIcon.png";
import close from "../Assets/images/xcloseIcon.png";

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
          <PopUp/>
        </div>
      </nav>
    </header>
  );
}

export function Button({handlesClick}) {
  return (
    <>
      <a href="##" class="header__btn-link" onClick={handlesClick}>
        Connect wallet
      </a>
    </>
  );
}
export function Modals({handleclose}){
  return (
    <>
      <div className="Modal">
        <div className="ModalBody">
          <div className="ModalHeader">
            <h2 className="ModalTitle">Connect wallet</h2>
            <img src = {close} alt="" className="ModalClose" onClick={handleclose}/>
          </div>
          <div className="ModalContent">
              <hr className="ModalLine"/>
            <p className="ModalText">Choose your preffered wallet</p>
            <div className="Metamask connect">
              <img src = {metamask} alt="" className="MetamaskIcon"/>
              <p className="MetamaskText">Metamask</p>
              <img src = {drop} alt="" className="MetamaskDrop"/>
            </div>
            <div className="WalletConnect connect">
              <img src = {walletconnect} alt="" className="WalletConnectIcon"/>
              <p className="WalletConnectText">WalletConnect</p>
              <img src = {drop} alt="" className="WalletConnectDrop"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function PopUp() {
  const [isVisible, setIsVisible] = useState(false);
  function handleClick (){
    setIsVisible(!isVisible)
  }
  return (
    <>
      <Button handlesClick={handleClick} />
      {isVisible && (<Modals handleclose={handleClick}/>)}
    </>
  );

    
}

function Sidemenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Side display={isOpen} />
    </>
  );
}
function Side({ display }) {
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
              <PopUp/>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
export default Navbar;
export { Sidemenu };
