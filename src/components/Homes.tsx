import React from 'react';
import house1 from '../img/house1.jpeg';
import house2 from '../img/house2.jpeg';
import house3 from '../img/house3.jpeg';
import house4 from '../img/house4.jpeg';
import house5 from '../img/house5.jpeg';
import house6 from '../img/house6.jpeg';
import { bookMarkIcon, chatIcon } from '../utils/Icons';

const Homes = () => {
  return (
    <section className='homes'>
      <div className='home'>
        <img src={house1} alt='house1' className='home__img' />
        {bookMarkIcon}
        <h5 className='home__name'>Beaufil Family House</h5>
        <div className='home__location'>
          {chatIcon}
          <p>USA</p>
        </div>{' '}
        <div className='home__rooms'>
          {chatIcon}
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          {chatIcon}
          <p>
            235 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          {chatIcon}
          <p>$1.200,00</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img src={house2} alt='house2' className='home__img' />
        {bookMarkIcon}
        <h5 className='home__name'>Beaufil Family House</h5>
        <div className='home__location'>
          {chatIcon}
          <p>Canada</p>
        </div>
        <div className='home__rooms'>
          {chatIcon}
          <p>6 rooms</p>
        </div>
        <div className='home__area'>
          {chatIcon}
          <p>
            635 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          {chatIcon}
          <p>$2.200,00</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img src={house3} alt='house3' className='home__img' />
        {bookMarkIcon}
        <h5 className='home__name'>Beaufil Family House</h5>
        <div className='home__location'>
          {chatIcon}
          <p>UK</p>
        </div>
        <div className='home__rooms'>
          {chatIcon}
          <p>4 rooms</p>
        </div>
        <div className='home__area'>
          {chatIcon}
          <p>
            432 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          {chatIcon}
          <p>$850,00</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img src={house4} alt='house 4' className='home__img' />
        {bookMarkIcon}
        <h5 className='home__name'>Sothtemphon Villa</h5>
        <div className='home__location'>
          {chatIcon}
          <p>USA</p>
        </div>
        <div className='home__rooms'>
          {chatIcon}
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          {chatIcon}
          <p>
            235 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          {chatIcon}
          <p>$2.300,00</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img src={house5} alt='house1' className='home__img' />
        {bookMarkIcon}
        <h5 className='home__name'>Modern family appartment</h5>
        <div className='home__location'>
          {chatIcon}
          <p>Italy</p>
        </div>
        <div className='home__rooms'>
          {chatIcon}
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          {chatIcon}
          <p>
            235 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          {chatIcon}
          <p>$300,000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img src={house6} alt='house1' className='home__img' />
        {bookMarkIcon}
        <h5 className='home__name'>Beaufil family house</h5>
        <div className='home__location'>
          {chatIcon}
          <p>USA</p>
        </div>
        <div className='home__rooms'>
          {chatIcon}
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          {chatIcon}
          <p>
            1200 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          {chatIcon}
          <p>$8.200,00</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
    </section>
  );
};

export default Homes;
