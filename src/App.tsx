import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Homes from './components/Homes';
import Realtors from './components/Realtors';
import Sidebar from './components/Sidebar';
import StoryContent from './components/StoryContent';
import StoryPictures from './components/StoryPictures';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
