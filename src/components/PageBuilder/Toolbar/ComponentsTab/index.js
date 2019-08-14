import React from 'react';
import ComponentCard from './ComponentCard';

const ComponentsTab = ({ addComponent }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: 450, overflow: 'scroll'}}>
      <ComponentCard type='heading' onClick={addComponent} icon="font-size" title="Heading" />
      <ComponentCard type='text' onClick={addComponent} icon="align-center" title="Paragraph" />
      <ComponentCard type='table' onClick={addComponent} icon="table" title="Table" />
      <ComponentCard type='tabs' onClick={addComponent} title="Tabs" />
      <ComponentCard type='carousel' onClick={addComponent} title="Carousel" />
      <ComponentCard type='image' title="Image" />
      <hr style={{ width: '80%'}} />
      <h1 style={{ width: '80%'}} >Layout</h1>
      <ComponentCard title="2 Column" />
      <ComponentCard title="1 Column" />
    </div>
  );
};

export default ComponentsTab;