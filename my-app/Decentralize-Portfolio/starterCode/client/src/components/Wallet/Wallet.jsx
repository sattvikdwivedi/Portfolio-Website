import "./Wallet.css";
import { useState } from "react";
import Web3 from "web3";
import ABI from "./ABI.json";

const Wallet = ({saveState}) => {
      const[connect,setconnect]=useState(true);
      const isAndroid = /android/i.test(navigator.userAgent);

  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts'});
      const contract = new web3.eth.Contract(
        ABI,
        "0x6C715A93C974E577639E7611B7f32a91bb5970b8"
      );
      saveState(
            {web3:web3,contract:contract}
      );
   setconnect(false);
    } catch (err) {
      alert("Please install metamask");
    }
  };
  return (
    <>
      <div className="header">      
            {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
        <button className="connectBTN" onClick={init} disabled= {!connect}>
          {connect?"Connect Metamask":"Connected"}
        </button> 
      </div>
    </>
  );
};
export default Wallet;
