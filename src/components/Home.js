import Search from '../components/location_search';
import Wallet from '../components/wallet'
import Adventure from '../components/adventure'
import Nft from '../components/NFT';

function Home() {
  return (
    <div className="home">
      <Search/>
      <Wallet/>
      <Adventure/>
      <Nft/>
    </div>
  );
}

export default Home;
