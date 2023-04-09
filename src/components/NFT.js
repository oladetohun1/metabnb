import card01 from "../Assets/images/tilt.png";

function Nft() {
  return (
    <section className="nft" id="NFT">
        <div className="nft__containers">
      <div className="nft__container">
        <div className="nft__text">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <a href="##" className="nft__text-link">Learn more</a>
        </div>
        <div className="nft__cards">
          <img src={card01} alt="" className="nft__cards-img"/>
        </div>
      </div>
        </div>
    </section>
  );
}

export default Nft;
