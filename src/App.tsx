import Features from './components/Features';
import StoryContent from './components/StoryContent';
import StoryPictures from './components/StoryPictures';

function App() {
  return (
    <div className='container'>
      <div className='sidebar'>Sidebar</div>
      <header className='header'>Header</header>
      <div className='realtors'>Top 3 realtors</div>
      <Features />
      <StoryPictures />
      <StoryContent />
      <section className='homes'>Homes</section>
      <section className='gallery'>Gallery</section>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
