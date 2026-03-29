// import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player , coin, setCoin, selected, setSelected}) => {
  // console.log(player);
  // const [isSelected, setIsSelected] = useState(false);
  const isSelected = selected.some(p => p.playerName === player.playerName);
  const handleChoosePlayer = () => {
    if(isSelected) return;
    const newCoin = coin - player.price;
    if(newCoin >= 0){
      setCoin(newCoin);
      
      alert(player.playerName + " is selected");
      
      
    }
    else{
      alert("no money");
      return;
    }
    // setIsSelected(true);
    setSelected([...selected, player]);
    

    // console.log(setCoin(coin - player.price));
  }
  return (
    <div className="card bg-base-100  shadow-sm ml-1">
      <figure>
        <img 
          className="h-50 w-auto"
          src={player.image}
          alt="cricketer"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-4">
            <FaUser className="text-xl "></FaUser>
            <h3 className="font-semibold text-[20px]">{player.playerName}</h3>
        </div>
        <div className="flex justify-between items-center text-gray-500">
            <div className="flex items-center gap-3">
                <FaFlag></FaFlag>
                {player.playerCountry}
            </div>
            <button className="btn">{player.playerType}</button>
        </div>
        <div className="divider"></div>
        <h4 className="font-bold">Rating</h4>
        <div className="flex justify-between items-center font-bold text-gray-500">
            <h3>{player.battingStyle}</h3>
            <h3>{player.bowlingStyle}</h3>
        </div>
        <div className="flex justify-between items-center">
            <h3 className="font-bold">Price : ${player.price}</h3>
            <button 
              onClick={handleChoosePlayer}
              disabled={isSelected}
              className="btn ">{isSelected ? "Selected" : "Choose Player"}</button>
        </div>

        
      </div>
    </div>
  );
};

export default Card;
