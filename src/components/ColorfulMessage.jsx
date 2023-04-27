import React from 'react';

export const ColorfulMessaga = (props) => {
  // console.log(props);

  const { color, message, children } = props;
  const contentStyle = {
    color,
    fontSize: '18px',
  };

  return (
    <>
      <p style={contentStyle}>{ message }</p>
      <p style={contentStyle}>{ children }</p>
    </>
  );
}