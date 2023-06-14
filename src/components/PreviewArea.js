import React, { useState} from 'react';
import CatSprite from "./CatSprite";
import '../styles/newOutput.css';

const NewPreview = ({ items }) => {
    const [xPosition, setXPosition] = useState(0);
    const [yPosition] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [diablePlay, setDisablePlay] = useState(false);
    console.log('==> items', items);

    let styles = { 
        width: '100px',
        height: '100px',
        position: 'absolute',
        transform: `translate(${xPosition}px, ${yPosition}px) rotate(${rotation}deg)`
    };

    const executeArray = (['move', 'rotateLeft', 'rotateRight', 'center'])
    const delay = 1000; // Delay in milliseconds

    const executeWithDelay = (index) => {
        if (index >= executeArray.length) {
          setDisablePlay(false);
          return; // Exit recursion when all elements have been processed
        }
        setDisablePlay(true);
        const action = executeArray[index];
        // Perform operations on each element of the array
        console.log(action); // Example operation: log the action to the console
      
        if (action === 'move') {
          moveFunction();
        }

        if (action === 'rotateLeft') {
            rotateleftFunction();
        }

        if (action === 'rotateRight') {
            rotateRightFunction();
        }

        if (action === 'center') {
            moveCenter();
        }
      
        setTimeout(() => {
          executeWithDelay(index + 1); // Call the function recursively with the next index
        }, delay);
      };
      

    const handleNewTranslate = () => {
        executeWithDelay(0);
    }

    const moveFunction = () => {
        console.log('move function called');
        setXPosition((prevXPosition) => prevXPosition + 20);
    }

    const rotateleftFunction = () => {
        console.log('rotate left function called');
        setRotation((prevRotation) => prevRotation + 45);
    }

    const rotateRightFunction = () => {
        console.log('rotate right function called');
        setRotation((prevRotation) => prevRotation - 45);
    }

    const moveCenter = () => {
        console.log('move center function called');
        setXPosition((prevXPosition) => prevXPosition - 20);
    }

    return (
        <div className="container">
            <div className="buttons"> <button onClick= {handleNewTranslate} disabled={diablePlay}> Play </button> </div>
            <div style={ styles }> <CatSprite /> </div>
        </div>
    );
    };
export default NewPreview;
