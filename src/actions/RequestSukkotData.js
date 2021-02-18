export const REQUEST_SUKKOT_DATA = 'REQUEST_SUKKOT_DATA';
// export const PUSH_EXTRAS_DATA = 'PUSH_EXTRAS_DATA';


export const requestSukkotData = () => {
    return async (dispatch, getState) => {
        fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots.json/')
            .then(obj => {
                const promise = obj.json();
                promise.then(obj => {
                    dispatch({ type: REQUEST_SUKKOT_DATA, payload: obj });
                })
            })
    };
};

// export const requestExtrasData = (obj) => {
//     return async (dispatch, getState) => {
//         try {
//             const response = await fetch(
//                 `https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json`,
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(obj)
//                 }
//             );
//             //   dispatch({ type: PUSH_EXTRAS_DATA, orders: loadedOrders });
//         } catch (err) {
//             console.log(err);
//         }
//     };
// };