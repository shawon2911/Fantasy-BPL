import React from 'react';
import Card from '../Ui/Card';

const AvailablePlayers = ({playersData}) => {
    // console.log(playersData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                playersData.map((player, index) => <Card key={index} player={player}></Card>)
            }
        </div>
    );
};

export default AvailablePlayers;