import logo from '../img/logo.png';
import logoForbs from '../img/logo-forbes.png';
import techCrunch from '../img/logo-techcrunch.png';
import logo3 from '../img/logo-bi.png';
import logoBbc from '../img/logo-bbc.png';
import house from '../img/house3.jpeg';

const Header = () => {
  return (
    <header className='header'>
      {/* <img src={logo} alt='Nexter logo' className='header__logo' />
      <div className='header__text'>
        <h3 className='heading-3'>Your own home</h3>
        <h1 className='heading-1 mb-sm'>The ultimate personal freedom</h1>
        <button className='header__button'>View Our Properties</button>
      </div>
      <img src={logoBbc} alt='' className='featured-logo featured-logo--1' />
      <img src={logoForbs} alt='' className='featured-logo featured-logo--2' />
      <img src={techCrunch} alt='' className='featured-logo featured-logo--3' />
      <img src={logo3} alt='' className='featured-logo featured-logo--4' /> */}

      <img src={logo} alt='Nexter logo' className='header__logo' />
      <h3 className='heading-3'>Your own home</h3>
      <h1 className='heading-1 mb-sm'>The ultimate personal freedom</h1>
      <button className='btn header__btn'>View Our Properties</button>
      <div className='header__seenon-text'>Seen on</div>
      <div className='header__seenon-logos'>
        <img src={logoBbc} alt='logo bbc' className='featured-logo featured-logo--1' />
        <img
          src={logoForbs}
          alt='logo forbs'
          className='featured-logo featured-logo--2'
        />
        <img
          src={techCrunch}
          alt='logo tech crunch'
          className='featured-logo featured-logo--3'
        />
        <img src={logo3} alt='logo insider' className='featured-logo featured-logo--4' />
      </div>
    </header>
  );
};

export default Header;
