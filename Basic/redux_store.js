
//ACTION CREATORS

//ACTION

const newBooking = (name, amount) =>{
    return {
        type:"NEW_BOOKING",
        payload: {
            name,
            amount
        }
    };
};

const cancelBooking = (name, refundAmount) =>{
    return {
        type:"CANCEL_BOOKING",
        payload: {
            name,
            refundAmount
        }

    };
};

//Reducer
const reservationHistory = (oldReservationList = [], action) => {

    if(action.type === "NEW_BOOKING") {
        return [...oldReservationList, action.payload];
    } else if (action.type === "CANCEL_BOOKING") {
        return oldReservationList.filter(record => {
        return record.name !== action.payload.name;
    });
    } else {
        return oldReservationList;
    }
};

const cancellationHistory = (oldcancellationList = [], action) => {

   if (action.type === "CANCEL_BOOKING") {
        return [...oldcancellationList, action.payload];
    } else {
        return oldcancellationList;
    }
};

const accounting = (totalAmount = 100, action) => {
    if(action.type === "NEW_BOOKING"){
        return totalAmount + action.payload.amount;
    } else if(action.type === "CANCEL_BOOKING"){
        return totalAmount - action.payload.refundAmount;
    } else {
        return totalAmount;
    }
};

//Redux Store

const { combineReducers, createStore} = Redux;

const centralStoreLibrary = combineReducers ({
    accounting: accounting,
    cancellationHistory: cancellationHistory,
    reservationHistory: reservationHistory
});

const store = createStore(centralStoreLibrary);

const action = newBooking("Sushmitha", 200);
store.dispatch(action);

console.log(store.getState());


