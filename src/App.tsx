import Features from './components/Features';

function App() {
  return (
    <div className='container'>
      <div className='sidebar'>Sidebar</div>
      <header className='header'>Header</header>
      <div className='realtors'>Top 3 realtors</div>
      <Features />
      <div className='story__pictures'>Story pictures</div>
      <div className='story__content'>Story content</div>
      <section className='homes'>Homes</section>
      <section className='gallery'>Gallery</section>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
