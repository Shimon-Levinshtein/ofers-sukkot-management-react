export const PUSH_SUKKA_DATA = 'PUSH_SUKKA_DATA';
export const EDIT_SUKKA_DATA = 'EDIT_SUKKA_DATA';
export const PUSH_EXTRAS_DATA = 'PUSH_EXTRAS_DATA';

export const pushSukkaData = (obj) => {
    return async (dispatch) => {
        fetch(
            `https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots.json`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        ).then(result => {
            const promise = result.json();
            promise.then(resultB => {
                fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots.json/')
                    .then(obj => {
                        const promise = obj.json();
                        promise.then(obj => {
                            obj[resultB.name].focus = true;
                            dispatch({ type: PUSH_SUKKA_DATA, item: obj });
                        })
                    })
            })
        })
    };
};

export const editSukkaData = (id) => {
    return async (dispatch, getState) => {
        const objItems = getState().sukkotData;
        objItems[id].id = id;
        dispatch({ type: EDIT_SUKKA_DATA, item: objItems[id] });
    };
};

export const pushChangesSukkaData = (obj) => {
    return async (dispatch) => {
        console.log(obj);
        fetch(
            `https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots/${obj.id}.json`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...obj})
            }
        ).then(result => {
            const promise = result.json();
            promise.then(resultB => {
                fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots.json/')
                    .then(obj => {
                        const promise = obj.json();
                        promise.then(obj => {
                            // obj[resultB.name].focus = true;
                            dispatch({ type: PUSH_SUKKA_DATA, item: obj });
                        })
                    })
            })
        })
    };
};

export const pushExtrasData = (obj) => {
    return async (dispatch, getState) => {
        // HandleFirebase();
        try {
            const response = await fetch(
                `https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                }
            );
            //   dispatch({ type: PUSH_EXTRAS_DATA, orders: loadedOrders });
        } catch (err) {
            console.log(err);
        }
    };
};
