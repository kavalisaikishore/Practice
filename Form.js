import React, { useState } from "react";
import {useDispatch} from 'react-redux';
function Form(){
    const[amount,setAmount]=useState("");
    const[name,setName]=useState("");
    const[mobile,setMobile]=useState("");
    const[address,setAddress]=useState("");
    const[transactionID,updateTransactionId]=useState(0);
    const dispatch=useDispatch();
    const handleDeposit=()=>{
        dispatch({type:"deposit",payload:amount});
        updateTransactionId(transactionID + 1);
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                id:transactionID,
                amount:amount,
                date:new Date(),
                type:"credit"
            }
        })
    }
    const handleWithdraw=()=>{
        dispatch({type:"withdraw",payload:amount});
        updateTransactionId(transactionID + 1);
        dispatch({
            type:"WITHDRAW_TRANSACTION",
            payload:{
                id:transactionID,
                amount:amount,
                date:new Date(),
                type:"debit"
            }
        })
    }
    const handleName=()=>{
        dispatch({type:"fullName",payload:name});
    }
    const handleMobile=()=>{
        dispatch({type:"mobileNumber",payload:mobile});
    }
    const handleAddress=()=>{
        dispatch({type:"address",payload:address})
    }
    const handleReset=()=>{
        dispatch({type:"reset",payload:reset})
    }
    
    return(
        <div className="container">
            <h2>Form Details:</h2>
            <div className="row">
                <div className="col-5">
                    <input className="form-control" value={amount} onChange={(e)=>{
                        let amount=e.target.value;
                        setAmount(amount)
                    }}/>
                </div>
                <button className="btn btn-primary col-1 mx-2" onClick={handleDeposit}>Deposit</button>
                <button className="btn btn-secondary col-1" onClick={handleWithdraw}>Withdraw</button>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5">
                    <input className="form-control" type="text" value={name} onChange={(e)=>{
                        let name=e.target.value;
                        setName(name)
                    }} ></input>
                </div>

                <button className="btn btn-danger col-1" onClick={handleName} >Update</button>
            </div>
            <br></br>
            <div className="row">
                <div className="col-5">
                    <input className="form-control" value={mobile} onChange={(e)=>{
                        let mobile=e.target.value;
                        setMobile(mobile);
                    }}/>


                </div>
                <button className="btn btn-danger col-1" onClick={handleMobile}>Update</button>

            </div>
            <br>
            </br>
            <div className="row">
                <div className="col-5">
                    <input className="form-control" type="text" value={address} onChange={(e)=>{
                        let address=e.target.value;
                        setAddress(address)
                    }}/>
                </div>
                <button className="btn btn-primary col-1" onClick={handleAddress}>Address</button>
                
            </div>

        </div>
    )
}
export default Form;