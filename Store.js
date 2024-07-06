import {createStore,combineReducers} from 'redux';
const initialState={
    balance:0,
    fullName:"",
    mobileNumber:"",
    address:""
}
function reducer(state=initialState,action){
    switch(action.type){
        case "deposit":
            return{...state,balance
                :state.balance + + action.payload
            }
            case "withdraw":
                return{...state,balance:state.balance -+ action.payload};
                case "fullName":
                    return{...state,fullName: action.payload};
                    case "mobileNumber":
                        return{...state,mobileNumber: action.payload};
                        case "address":
                            return{...state,address:action.payload}
                        default:
                            return state;
                            case "reset":
                                return initialState;
    }
}
function transactionReducer(state=[],action){
    switch(action.type){
        case "ADD_TRANSACTION":
            return[...state,
                {
                    id:action.payload.id,
                    amount:action.payload.amount,
                    type:action.payload.type,
                    date:action.payload.date
                }
            ]
            case "WITHDRAW_TRANSACTION":
                return[
            
                ...state,
                {
                    id:action.payload.id,
                    amount:action.payload.amount,
                    type:action.payload.type,
                    date:action.payload.date
                }
                ]
            default:
                return state;

    }

}
let rootReducer=combineReducers({
    Account:reducer,
    transaction:transactionReducer
})

 const store=createStore(rootReducer);
 export default store;