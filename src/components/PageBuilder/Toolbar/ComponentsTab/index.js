import React from 'react';
import ComponentCard from './ComponentCard';

const ComponentsTab = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <ComponentCard icon="font-size" title="Heading" />
      <ComponentCard icon="align-center" title="Paragraph" />
      <ComponentCard icon="table" title="Table" />
      <ComponentCard title="Tabs" />
      <ComponentCard title="Carousel" />
      <ComponentCard title="Image" />
    </div>
  );
};

export default ComponentsTab;