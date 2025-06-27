
import { useState, useEffect } from "react";
import "./Memo.css";


const Memo = ({data})=> {
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

    return (
    <div className="table-container">
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
              <td className="address-cell">{row.from}
                <a href="http://"></a>
              </td>
              <td>{row.timestamp}</td>
            

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Memo