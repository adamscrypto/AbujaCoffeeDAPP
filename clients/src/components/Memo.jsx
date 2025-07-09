
import { useState, useEffect } from "react";
import "./Memo.css";
import SearchPreviousCustomer from "./SearchPreviousCustomer";
// import AddressSelector from "./AddressSelector";


const Memo = ({data, isConnected})=> {

    const [allMemos, setAllMemos] = useState([])
    const [query, setQuery] = useState('')
    const {contract} = data

    useEffect(()=> {
        const memoMessage = async () => {

          let memos = await contract.getAllCustomersDetails()
          const sorted = [...memos].sort((a,b)=> b.timestamp.toLocaleString() - a.timestamp.toLocaleString());
          setAllMemos(sorted);  
        }

        contract && memoMessage()
    }, [contract])
 
 // Filtered list
    const filteredMemos = allMemos.filter(memo =>
    memo.name.toLowerCase().includes(query.toLowerCase()) ||
    memo.message.toLowerCase().includes(query.toLowerCase()) ||
    memo.from.toLowerCase().includes(query.toLowerCase())
  );
    return isConnected && (
      <>
       
    <div style={{marginTop:'120px'}} className="table-container">
      <SearchPreviousCustomer query = {query} onChange={setQuery} placeholder='Search Previous Transaction...'  />
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Contract Address</th>
            <th>Timestamp</th>
           
          </tr>
        </thead>
        <tbody>
          {filteredMemos.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.message}</td>
             
              <td className="address-cell">
                <a href={`https://sepolia.etherscan.io/address/${row.from}`} target="_blank"  rel="noopener noreferrer"> {row.from}</a> 
                </td>
             
              <td>{row.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
  
}

export default Memo