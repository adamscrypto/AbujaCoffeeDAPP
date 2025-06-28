import { useState, useEffect } from 'react'
import './App.css'
import { ethers } from 'ethers'
import abi from "./contractabi/abi.json"
import Buy from "./components/Buy.jsx"
import Memo from "./components/Memo.jsx"
import Header from "./components/Header.jsx"



function App() {

  
  //useState to manage the variables
  const [data, setData] = useState({
    provider:null,
    signer:null,
    contract:null
  })

  const [account, setAccount] = useState("Not Connected")

  useEffect(()=>{

    const template = async ()=>{

      const contractAddress = "0xfE01A58E6127325c8134B8E82d8c8cc1067CD4Ba";
      const contractABI = abi.abi;


if(window.ethereum){
     
      try {
            const account = window.ethereum.request({ method: 'eth_requestAccounts' })
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner;
            window.ethereum.on("accountsChanged", ()=>window.location.reload())
            const contract = new ethers.Contract(contractAddress, contractABI, signer)

            setData({provider, signer, contract})
            setAccount(account)
            
      } catch (error) {
        console.log(error)
      }
    }
    else{
      alert("You Dont have MetaMask installed...")
    }
     
    } 
    template()
  },[])

  return (
    <>
    <Header />
        {/* <div className="header">
      <a href="#default" className="logo">
        <img src={logo} alt="" srcSet="" />
      </a>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div> */}
      <div>Connected Account: {account} </div>
      <Buy data = {data}/>
       <Memo data = {data}/>
      
       
       
    </>
  )
}

export default App
