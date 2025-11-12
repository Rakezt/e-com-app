import React from 'react';
import HeroSection from './components/HeroSection';

const About = () => {
  const data = { name: 'YourSweetNightmare' };
  return (
    <div>
      <HeroSection myData={data} />
      <div className='container'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          deleniti neque ipsam, repellendus eveniet omnis. Quis, incidunt
          cupiditate fugiat saepe, exercitationem, voluptatum tempora dolor id
          eius voluptas sed autem praesentium? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio hic praesentium corrupti sunt quos
          incidunt eius? Provident a quasi dignissimos excepturi adipisci ea
          asperiores! Ducimus quidem et fugit error accusamus! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nobis assumenda autem ducimus
          deserunt obcaecati nostrum nam, quisquam quam beatae ea, eaque nihil
          sequi neque aliquid eius. In magnam ducimus, Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus, hic natus perspiciatis
          aperiam nulla corrupti dolorem dolores consequatur in porro? Unde
          quos, voluptatem vero maiores quasi necessitatibus excepturi facilis
          accusantium.
        </p>
      </div>
    </div>
  );
};

export default About;
