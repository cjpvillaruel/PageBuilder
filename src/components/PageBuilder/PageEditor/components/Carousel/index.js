import React from 'react';
import { Carousel } from 'antd';

const HeroCarousel = () => {
  return (
    <Carousel autoplay>
      <div><div style={{ background: 'blue', height: 150, color: 'white'}}>1</div></div>
      <div><div style={{ background: 'blue', height: 150, color: 'white'}}>2</div></div>
      <div><div style={{ background: 'blue', height: 150, color: 'white'}}>3</div></div>
    </Carousel>
  )
};

export default HeroCarousel;