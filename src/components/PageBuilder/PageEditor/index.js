import React from 'react';
import Heading from './components/Heading/Heading';
import Text from './components/Text';
import {default as Table} from './components/Table';
import Tab from './components/Tab';
import HeroCarousel from './components/Carousel';

const size = [250, 440]

const computePageSize = zoom => ( size.map(size => size * (zoom / 100)));

const components = {
  heading: Heading,
  text: Text,
  table: Table,
  tabs: Tab,
  carousel: HeroCarousel,
}

const PageEditor = ({ zoom, pageComponents }) => {
  const [width, height] = computePageSize(zoom);
  console.log(components);
  let Element = null;
  return (
    <div style={{ width: width, minHeight: height, background: 'white', height: 'max-content' }}>
      {pageComponents.map( component => {
        Element = components[component.type]
        if(Element){
          return (
            <div style={{ border: '1px dashed gray'}}>
              <Element {...component}/>
            </div>
          );
        }
        return null;
      }) }
      
    </div>
  );
};

export default PageEditor;