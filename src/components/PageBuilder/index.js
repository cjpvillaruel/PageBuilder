import React, { useState } from 'react';
import Toolbar from './Toolbar';
import PageEditor from './PageEditor';
import { Row, Col } from 'antd';

const zoomStyle = {
  width: 20,
  height: 20,
  background: 'white',
  border: 0,
  display: 'block',
  margin: 5,
  padding: 0,
  cursor: 'pointer',
}

const PageBuilder = () => {
  const [zoom, setZoom] = useState(150);
  const [pageComponents, setComponents] = useState([]);

  const zoomIn = () => {
    if( zoom + 25 <= 250){
      setZoom(zoom + 25);
    }
  };

  const zoomOut = () => {
    if( zoom - 25 >= 75 ){
      setZoom(zoom - 25);
    }
  };

  const addComponent = (newComponent) => {
    console.log(newComponent);
    // change focused component

    const newComponents = pageComponents.map( component => ({...component, isEditMode: false}));
    
    setComponents([...newComponents, { type: newComponent, isEditMode: true}])
  }

  return(
    <Row style={{ background: 'white'}}>
      <Col span={6}><Toolbar addComponent={addComponent}/></Col>
      <Col
        span={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 50,
          background: '#bfbfbf',
          height: 540,
          overflow: 'scroll'
        }}
      >
          <PageEditor zoom={zoom} pageComponents={pageComponents} />
          <div style={{
            position: 'fixed',
            marginTop: -25,
            marginLeft: '20%',
          }}>
            <button style={zoomStyle} onClick={zoomOut}>-</button>
            <button style={zoomStyle} onClick={zoomIn}>+</button>
            <span style={{ fontSize: 10 }}>{zoom}%</span>
          </div>
        </Col>
    </Row>
  )
}

export default PageBuilder;