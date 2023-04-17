import Features from './components/Features';
import StoryContent from './components/StoryContent';

function App() {
  return (
    <div className='container'>
      <div className='sidebar'>Sidebar</div>
      <header className='header'>Header</header>
      <div className='realtors'>Top 3 realtors</div>
      <Features />
      <div className='story__pictures'>Story pictures</div>
      <StoryContent />
      <section className='homes'>Homes</section>
      <section className='gallery'>Gallery</section>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
