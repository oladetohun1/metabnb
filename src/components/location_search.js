import image2 from "../Assets/images/Group 4028static.png";


function Search() {
  return (
    <div className="container">
    <section className="header-search">
      <div className="header-search__text">
        <p>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>{" "}
        </p>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        
        <form >
          <input
            type="text"
            placeholder="Search for location"
            className="header-search__input"
          />
          <button type="submit" className="header-search__btn">
            Search
          </button>
        </form>
      </div>
      <div className="header-search__card">
        <div className="header-search__card--one">
        <img src={image2} alt="" className="header-search__card-card" />
        </div>
       
      </div>
    </section>
    </div>
  );
}

export default Search;
