import React from 'react';

const size = [250, 440]

const computePageSize = zoom => ( size.map(size => size * (zoom / 100)));

const PageEditor = ({ zoom }) => {
  const [width, height] = computePageSize(zoom);
  return (
    <div style={{ width: width, height: height, background: 'white' }}>
      
    </div>
  );
};

export default PageEditor;