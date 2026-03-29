import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";


const fetchPlayer = async() => {
  const res = await fetch('/playerData.json');
  return res.json();
}


function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(500000);

  return (
    <>
     <Navbar coin={coin} setCoin={setCoin}></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
      <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
     </Suspense>
    
    </>
  );
}

export default App;
