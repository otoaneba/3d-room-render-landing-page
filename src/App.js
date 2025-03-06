import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import CommunitySection from './components/CommunitySection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default App; 