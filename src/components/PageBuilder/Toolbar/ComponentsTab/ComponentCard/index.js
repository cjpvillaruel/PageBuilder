import React from 'react';
import { Icon } from 'antd';

// add style on click and on focus
const cardStyle = {
  padding: 10,
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '45%',
  maxWidth: 140,
  marginBottom: 10,
  marginRight: 5,
  marginLeft: 5,
  borderRadius: 5,
  height: 100,
  border: '1px solid #aaaaca',
  cursor: 'pointer'
}

const ComponentCard = ({ title, icon, children }) => {
  return (
    <button style={cardStyle}>
      <Icon type={icon} style={{ fontSize: '2rem', display: 'block' }} />
      {title}
    </button>
  )
};

export default ComponentCard;
