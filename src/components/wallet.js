import mbtoken from "../Assets/images/mbtoken.png";
import metamask from "../Assets/images/metamask.png";
import opensea from "../Assets/images/opensea.png";

function Wallet() {
  return(
    <div className="wallet">
    <div className="wallet__container">
    <div className="wallet__some">
      <img src={mbtoken} alt="" className="wallet__img" />
      <a href="##" className="wallet__link">
        MBToken
      </a>
    </div>
    <div className="wallet__some">
      <img src={metamask} alt="" className="wallet__img" />
      <a href="##" className="wallet__link">
        METAMASK
      </a>
    </div>
    <div className="wallet__some">
      <img src={opensea} alt="" className="wallet__img" />
      <a href="##" className="wallet__link">
        Opensea
      </a>
    </div>
    </div>
  </div>
  );

}

export default Wallet;
