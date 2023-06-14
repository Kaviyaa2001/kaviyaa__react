import React, { useState , useEffect} from 'react';
import '../styles/outputArea.css';

const OutputArea = () => {
    const [animationSteps, setAnimationSteps] = useState([]);

  const handleAnimate = () => {
    setAnimationSteps((prevSteps) => [...prevSteps, 'animate1', 'animate2', 'animate3']);
  };

  useEffect(() => {
    const object = document.getElementById('animated-object');

    const executeAnimations = () => {
      animationSteps.forEach((animation, index) => {
        setTimeout(() => {
          object.classList.add(animation);
        }, index * 1000);
      });

      setTimeout(() => {
        object.classList.remove(...animationSteps);
        setAnimationSteps([]);
      }, animationSteps.length * 1000);
    };

    executeAnimations();
  }, [animationSteps]);

  return (
    <div className="container">
      <div className="object-container">
        <div id="animated-object" className="object" />
      </div>
      <div className="buttons">
        <button onClick={handleAnimate}>Add Animations</button>
      </div>
    </div>
  );
};

export default OutputArea;
