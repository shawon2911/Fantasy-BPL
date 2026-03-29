import React from 'react';
import Card from '../Ui/Card';

const AvailablePlayers = ({playersData, coin, setCoin, selected, setSelected}) => {
    // console.log(playersData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                playersData.map((player, index) => 
                        <Card 
                            key={index}
                            player={player}
                            coin={coin}
                            setCoin={setCoin}
                            selected={selected}
                            setSelected={setSelected}>
                        </Card>)
                                
            }
        </div>
    );
};

export default AvailablePlayers;