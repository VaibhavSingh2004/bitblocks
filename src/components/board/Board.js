import React, { useEffect, useState } from "react";
import './Board.css';
import Tile from "../tile/Tile";
import Overlay from "../overlay/Overlay";
import NewGame from "../new-game/NewGame";
import Winner from "../winner/Winner";
import data from "./yourJsonFile"; // Import your JSON data

const Board = () => {
    const shuffle = () => 
        new Array(16)
        .fill()
        .map((_,i) => i+1)
        .sort(() => Math.random() -.5)
        .map((x,i) => ({value : x , index : i}));

    const [numbers, setNumbers] = useState([]);
    const [animating, setAnimating] = useState(false);

    const reset = () => {
        const shuffledNumbers = shuffle();
        const firstBlockIndex = shuffledNumbers.findIndex(n => n.value === 1);
        const emptySlotIndex = shuffledNumbers.findIndex(n => n.value === 16);

        // Swap the first block with the block at position 0 only.
        if (firstBlockIndex !== 0) {
            const temp = shuffledNumbers[firstBlockIndex];
            shuffledNumbers[firstBlockIndex] = shuffledNumbers[0];
            shuffledNumbers[firstBlockIndex].index = firstBlockIndex;
            shuffledNumbers[0] = temp;
            shuffledNumbers[0].index = 0;
        }

        // Update the index of the empty slot
        shuffledNumbers[emptySlotIndex].index = emptySlotIndex;

        setNumbers(shuffledNumbers);
    };

    const moveTile = tile => {
        const i16 = numbers.find(n => n.value===16).index;
        if (![i16-1, i16+1, i16-4, i16+4].includes(tile.index) || animating)
            return;
        
        const newNumbers = 
            [...numbers].map(number => {
                if (number.index !== i16 && number.index !== tile.index)
                    return number;
                else if (number.value === 16)
                    return {value: 16, index: tile.index};
                return {value: tile.value, index : i16};
            });
        setAnimating(true);
        setNumbers(newNumbers);
        setTimeout(() => setAnimating(false), 200);
    };
    
    const handleKeyDown = e => {
        const i16 = numbers.find(n => n.value===16).index;
        if (e.keyCode === 37 && !(i16 % 4 === 3))
            moveTile(numbers.find(n => n.index === i16 + 1));
        else if (e.keyCode === 38 && !(i16 > 11))
            moveTile(numbers.find(n => n.index === i16 + 4));
        else if (e.keyCode === 39 && !(i16 % 4 === 0))
            moveTile(numbers.find(n => n.index === i16 - 1));
        else if (e.keyCode === 40 && !(i16 < 4))
            moveTile(numbers.find(n => n.index === i16 - 4));
    };

    useEffect(() => {
        document.addEventListener('keydown',handleKeyDown);
        return () => {document.removeEventListener('keydown',handleKeyDown)};
    });

    useEffect(reset, []);

    const validateBlocks = () => {
        for (let i = 1; i < numbers.length; i++) {
            const currentBlock = numbers[i];
            const previousBlock = numbers[i - 1];
            const currentData = data.find(item => item.index === currentBlock.value);
            const previousData = data.find(item => item.index === previousBlock.value);

            if (currentData && previousData && currentData.prehash !== previousData.hash) {
                alert(`Block ${currentData.BlockId} is not in the correct position.`);
                return;
            }
        }
        alert("All blocks are in the correct position.");
    };

    return (
        <div className="game">
            <div className="board">
                <Overlay size={16} />
                {numbers.map((x, i) => {
                    // Find corresponding data from JSON file
                    const tileData = data.find(item => item.index === x.value);
                    return <Tile key={i} number={x} moveTile={moveTile} data={tileData} />;
                })}
            </div>
            <Winner numbers={numbers} reset={reset}/>
            <div className="button-wrapper">
                <NewGame reset={reset} className="newgamebtn"/>
                <button onClick={validateBlocks} className="Validatebtn">Validate Blocks</button>
            </div>
            
        </div>
    );
};

export default Board;
