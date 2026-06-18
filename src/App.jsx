import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Our_Feats from './components/Our_Features.tsx';
import Startup_upgrade from "./components/Startup_upgrade.tsx";
import Potential_Customers from "./components/Potential_Customers.tsx";
import Integretion from "./components/Integretion.tsx";
import Clients from "./components/ Clients.tsx";
import Blogs from './components/Blogs.tsx';
import Video from './components/Video.tsx';
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
          <Potential_Customers />
          <Integretion/>
          <Clients/>
          <Blogs/>
          <Video/>
      </>
    )
}

export default App