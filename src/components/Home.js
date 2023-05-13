import Search from '../components/location_search';
import Wallet from '../components/wallet'
import Adventure from '../components/adventure'
import Nft from '../components/NFT';

function App() {
  return (
    <div className="app">
      <Search/>
      <Wallet/>
      <Adventure/>
      <Nft/>
    </div>
  );
}

export default App;