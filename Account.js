import {useSelector} from 'react-redux'
import React from 'react';
function Account(){
    let data=useSelector((state)=>{
        return state;
    })
    console.log(data);    
    return(
        <div className='container'>
            <h2 className='text-primary'>Account Details:</h2>
            <table className='table table-bordered w-50'>
                <thead>
                    <th>Balance</th>
                    <th>fullName</th>
                    <th>mobileNumber</th>
                    <th>Addess</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.Account.balance}</td>
                        <td>{data.Account.fullName}</td>
                        <td>{data.Account.mobileNumber}</td>
                        <td>{data.Account.address}</td>
                    </tr>
                    

                </tbody>
            </table>
            <h2 className="text-primary">Transaction Details</h2>
            <table  className='table table-bordered w-50'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                </tr>
                </thead>
<tbody>
    {
        data.transaction.map((tr,index)=>{
            return(
            <tr key={tr.id}>
                <td>{tr.id}</td>
                <td>{tr.amount}</td>
                <td>{tr.type}</td>
                <tr>{tr.date.toString()}</tr>

            </tr>
            )

        })
    }
    </tbody>                
                
            </table>


        </div>
    )
}
export default Account;