import {
  homeIcon,
  keyIcon,
  locationPinIcon,
  magnifyingGlassIcon,
  mapIcon,
  starICon,
} from '../utils/Icons';

const Features = () => {
  return (
    <section className='features'>
      <div className='feature '>
        {homeIcon}
        <h4 className='heading heading-4 heading-4--dark heading '>
          World's best luxury homes
        </h4>
        <p className='feature__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className='feature'>
        {magnifyingGlassIcon}
        <h4 className='heading heading-4 heading-4--dark'>Only the best properties</h4>
        <p className='feature__text'>
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a
          eligendi aut quia.
        </p>
      </div>
      <div className='feature'>
        {mapIcon}
        <h4 className='heading heading-4 heading-4--dark'>All homes in top location</h4>
        <p className='feature__text'>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className='feature'>
        {keyIcon}
        <h4 className='heading heading-4 heading-4--dark'>New home in one week</h4>
        <p className='feature__text'>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className='feature'>
        {starICon}
        <h4 className='heading heading-4 heading-4--dark '>Top 1% realtors</h4>
        <p className='feature__text'>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
        </p>
      </div>
      <div className='feature'>
        {locationPinIcon}
        <h4 className='heading-4 heading-4--dark'>Secure payments on Nexter</h4>

        <p className='feature__text'>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
        </p>
      </div>
    </section>
  );
};

export default Features;
