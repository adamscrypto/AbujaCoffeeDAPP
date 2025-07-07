import { useState, useEffect } from 'react'
// import { Route } from 'react-router-dom'
import './App.css'
import { ethers } from 'ethers'
import abi from "./contractabi/abi.json"
import Buy from "./components/Buy.jsx"
import Memo from "./components/Memo.jsx"
import Header from "./components/Header.jsx"
// import SearchPreviousCustomer from './components/SearchPreviousCustomer.jsx'



function App() {

  
  //useState to manage the variables
  const [data, setData] = useState({
    provider:null,  
    signer:null,
    contract:null
  })

  const [account, setAccount] = useState("Not Connected")
  const [isConnected, setIsConnected] = useState(false)
  // const [query, setQuery] = useState('')

  useEffect(()=>{

    const template = async ()=>{

      const contractAddress = "0xfE01A58E6127325c8134B8E82d8c8cc1067CD4Ba";
      const contractABI = abi.abi;


if(window.ethereum){
     
      try {
            const account = window.ethereum.request({ method: 'eth_requestAccounts' })
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            window.ethereum.on("accountsChanged", ()=>window.location.reload())
            const contract = new ethers.Contract(contractAddress, contractABI, signer)

            setData({provider, signer, contract})
            setAccount(account)
            setIsConnected(true)
            
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
    <Buy data = {data} account={account}/>
    <Memo data = {data} isConnected={isConnected}/>
         
    </>
  )
}

export default App
