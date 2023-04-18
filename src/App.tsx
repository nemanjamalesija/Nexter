import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Homes from './components/Homes';
import Sidebar from './components/Sidebar';
import StoryContent from './components/StoryContent';
import StoryPictures from './components/StoryPictures';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <header className='header'>Header</header>
      <div className='realtors'>Top 3 realtors</div>
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
