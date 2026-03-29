import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise, coin, setCoin}) => {
    const playersData = use(playersPromise);
    // console.log(playersData);
    const [selectedType , setSelectedType] = useState("available"); 
    const [selected, setSelected] = useState([]);

    return (
        <div className='mt-17'>
            <div className='flex justify-between items-center mb-9'>
                {
                    selectedType === "available" ? <h2 className='font-bold text-[28px]'>Available Players</h2> :
                        <h2 className='font-bold text-[28px]'>Selected Players({selected.length}/{playersData.length})</h2>
                }
               
                <div>
                    <button 
                    onClick={() => setSelectedType("available")}
                    className={`btn ${selectedType === "available" ?
                     "bg-[#E7FE29]" : 
                     "bg-white text-[#131313]/60"} 
                     rounded-r-none rounded-l-xl`}
                     >Available</button>
                    <button 
                    onClick={() => setSelectedType("selected")}
                    className={`btn ${selectedType === "selected" ?
                      "bg-[#E7FE29]" : 
                      "bg-white text-[#131313]/60"} 
                      rounded-l-none rounded-r-xl`}
                      >Selected({selected.length})</button>
                </div>
            </div>
            {
                selectedType === "available" ? 
                    <AvailablePlayers
                         playersData={playersData}
                         coin={coin}
                         setCoin={setCoin}
                         selected={selected}
                         setSelected={setSelected}>
                    </AvailablePlayers> : 

                    <SelectedPlayers 
                         selected={selected}>
                    </SelectedPlayers>

            }
        </div>
    );
};

export default Players;