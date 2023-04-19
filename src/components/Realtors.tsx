import realtor1 from '../img/realtor-1.jpeg';
import realtor2 from '../img/realtor-2.jpeg';
import realtor3 from '../img/realtor-3.jpeg';

const Realtors = () => {
  return (
    <div className='realtors'>
      <h3 className='heading-3 realtors__heading'>Top realtors</h3>
      <div className='realtors__container'>
        <div className='realtor'>
          <img src={realtor1} alt='Realtor 1' className='realtor__img' />
          <div className='realtor__decription'>
            <h4 className='heading-4 heading-4--light'>Erik Feinman</h4>
            <p className='realtor__p'>245 houses sold</p>
          </div>
        </div>
        <div className='realtor'>
          <img src={realtor2} alt='Realtor 2' className='realtor__img' />
          <div className='realtor__decription'>
            <h4 className='heading-4 heading-4--light'>Kim Brown</h4>
            <p className='realtor__p'>212 houses sold</p>
          </div>
        </div>
        <div className='realtor'>
          <img src={realtor3} alt='Realtor 3' className='realtor__img' />
          <div className='realtor__decription'>
            <h4 className='heading-4 heading-4--light'>Toby Ramsey</h4>
            <p className='realtor__p'>198 houses sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
