import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Our_Feats from './components/Our_Features.tsx';
import Startup_upgrade from "./components/Startup_upgrade.tsx";
import './index.css';


function App() {
    return (
      <>
          <div className="site-container">
              <Header />
              <Hero />
              <Our_Feats />
          </div>
          <Startup_upgrade />
      </>
    )
}

export default App