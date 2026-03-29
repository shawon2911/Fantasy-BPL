import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({ selected }) => {
  console.log(selected);
  return (
    <div>
      {selected.map((selectedPlayer, index) => {
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
              <button className="btn "><MdDelete className="text-red-500"></MdDelete></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
