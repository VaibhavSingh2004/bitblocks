import React from 'react';
import './Tile.css';

const Tile = ({ number, moveTile, data }) => {
    return (
        <div 
            onClick={() => moveTile(number)} 
            className={`number ${number.value === number.index + 1 ? 'correct' : ''} ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}
        >
            {/* <div>{number.value === 16 ? '' : number.value}</div> */}
            {data && (
                <div>
                    B-Id: {data.BlockId}<br />
                    Nonce: {data.NonceNo}<br />
                    Data: {data.data}<br />
                    Prehash: {data.prehash}<br />
                    Hash: {data.hash}
                </div>
            )}
        </div>
    );
};

export default Tile;
