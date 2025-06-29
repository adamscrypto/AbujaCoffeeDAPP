
import { useState, useEffect } from "react";
import "./Memo.css";


const Memo = ({data, isConnected})=> {
    const [memo, setMemo] = useState([])
    const {contract} = data

    useEffect(()=> {
        const memoMessage = async () => {

            let memos = await contract.getAllCustomersDetails()
            const sorted = [...memos].sort((a,b)=> b.timestamp.toLocaleString() - a.timestamp.toLocaleString());
           setMemo(sorted);
           
        }
        contract && memoMessage()
        // console.log(memo)
    }, [contract])

    return isConnected ? (
    <div style={{marginTop:'120px'}} className="table-container">
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
          {memo.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.message}</td>
              <td className="address-cell"> <a href="http://google.com"> {row.from}</a>  </td>
              <td>{row.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ):
  (<h1></h1>)
}

export default Memo