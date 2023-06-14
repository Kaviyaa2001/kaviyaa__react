import React from 'react';

const InputArea = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'Some data');
  };

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      style={{
        width: '200px',
        height: '200px',
        border: '1px solid black',
        padding: '20px',
      }}
    >
      Drag me!
    </div>
  );
};

export default InputArea;
