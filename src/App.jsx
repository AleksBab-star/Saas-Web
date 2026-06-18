import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Our_Feats from './components/Our_Features.tsx';
import './index.css';


function App() {
    return (
      <div className="site-container">
          <Header />
          <Hero />
          <Our_Feats />
      </div>
    )
}

export default App