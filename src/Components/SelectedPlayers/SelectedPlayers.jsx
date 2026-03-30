import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({ selected, setSelected, coin, setCoin }) => {
  const handleDeleteSelectedPlayer = (selectedPlayer) =>{
    // console.log(selected);
    const filteredPlayers = selected.filter(singleSelectedPlayer => singleSelectedPlayer.playerName !== selectedPlayer.playerName);
    // console.log(selected,"all selected");
    // console.log(filteredPlayers,"without delete player");
    setSelected(filteredPlayers);
    setCoin(coin + selectedPlayer.price);
  }
  return (
    <div>
      {selected.length === 0 ? 
         <div>
          <div className="h-50 flex justify-center items-center flex-col gap-4">
            <h3 className="font-bold text-2xl">No Players Selected Yet</h3>
            <h4 className="font-semibold text-gray-500 text-2xl">Go to Avaiiable tab to select players</h4>
          </div>
         </div> :
         selected.map((selectedPlayer, index) => {
          return (
            <div key={index} className="border mb-5 p-5 rounded-2xl">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPlayer.image}
                    alt=""
                    className="h-22 w-28 rounded-2xl"
                  />
                  <div>
                      
                    <span className="flex items-center gap-3">
                      <FaUser></FaUser>
                      <h3 className="font-bold text-2xl">{selectedPlayer.playerName}</h3>
                    </span>
                    <h4 className="font-semibold text-gray-500">{selectedPlayer.playerType}</h4>
                  </div>
                </div>
                <button
                onClick={()=>handleDeleteSelectedPlayer(selectedPlayer)}
                className="btn">
                  <MdDelete className="text-red-500"></MdDelete>
                </button>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default SelectedPlayers;
