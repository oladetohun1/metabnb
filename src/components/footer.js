import icon from "../Assets/images/Vectoricon-white.png";
import iconText from "../Assets/images/Vectortext-white.png";
import fbook from "../Assets/images/Vectorfacebook-icon.png";
import igram from "../Assets/images/Vectorinstagram-icon.png";
import copywright from "../Assets/images/Vectorcopyright-icon.png";
import twitter from "../Assets/images/Vectortwitter-icon.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer__icon">
          <div className="footer__logo">
            <img src={icon} alt="" className="footer__img" />
            <img src={iconText} alt="" className="footer__txt" />
          </div>
          <ul className="footer__socials">
            <img src={fbook} alt="" className="footer__socials fb" />
            <img src={igram} alt="" className="footer__socials ig" />
            <img src={twitter} alt="" className="footer__socials tw" />
          </ul>
          <p className="footer__copywright">
            <img src={copywright} className="" alt="" /> 2022 Metabnb
          </p>
        </div>
        <ul className="footer__lists">
          <li className="footer__title">Community</li>
          <li className="footer__item">NFTs</li>
          <li className="footer__item">Tokens</li>
          <li className="footer__item">Landlords</li>
          <li className="footer__item">Discord</li>
        </ul>
        <ul className="footer__lists">
          <li className="footer__title">Places</li>
          <li className="footer__item">Castle</li>
          <li className="footer__item">Farms</li>
          <li className="footer__item">Beach</li>
          <li className="footer__item">Learn More</li>
        </ul>
        <ul className="footer__lists">
          <li className="footer__title">About us</li>
          <li className="footer__item">Road Map</li>
          <li className="footer__item">Creators</li>
          <li className="footer__item">Career</li>
          <li className="footer__item">Contact us</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
