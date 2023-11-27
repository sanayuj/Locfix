
import './App.css';
import { topRated } from './categoryUrls';
import Cards from './components/Cards/Cards';
import Carousel from './components/Carousel/Carousel';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div>

    <Nav/>
    <Carousel/>
    <Cards url={topRated}/>
    </div>
  );
}

export default App;
