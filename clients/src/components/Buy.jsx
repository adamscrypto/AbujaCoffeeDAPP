import { ethers } from 'ethers'
import { useRef} from 'react'
import "./Buy.css";

function Buy({data}) {

  const nameRef = useRef(null);
  const messageRef = useRef(null);
  // const amountRef = useRef(0);
//  window.ethereum.request({ method: 'eth_requestAccounts' })
 const{contract} = data

  const buyCoffee = async (e) => {
    e.preventDefault()
    const name = nameRef.current.value;
    const message = messageRef.current.value;
    // const amount = messageRef.current.value;
    

    const tx = contract.buyChai(name, message, {value:ethers.parseEther("0.001")})
    await tx.wait()
    alert("...Transaction Successful!")
    // window.location.reload()

     nameRef.current.value = "";   
      messageRef.current.value = "";
  
}


// 

return(
   <>

   <div className="form-card">
      <form onSubmit={buyCoffee}>
        <div className="form-group">
          <label>Name:</label>
          <input ref={nameRef} placeholder="Enter Name" />
        </div>
        {/* <div className="form-group">
          <label>Amount:</label>
          <input ref={amountRef} type='number' step="0.001" placeholder="Enter Name" />
        </div> */}
        <div className="form-group">
          <label>Message:</label>
          <textarea ref={messageRef}></textarea>
        </div>
        <button type="submit">Pay (0.001 ETH ) </button>
      </form>
    </div>
   
  
    </>
)
}

export default Buy



