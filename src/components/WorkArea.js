import React from 'react';

const Workspace = () => {
  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    console.log('Dropped data:', data);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: '400px',
        height: '400px',
        border: '1px solid black',
        padding: '20px',
      }}
    >
      Drop here!
    </div>
  );
};

export default Workspace;
