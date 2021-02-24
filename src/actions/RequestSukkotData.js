export const REQUEST_SUKKOT_DATA = 'REQUEST_SUKKOT_DATA';
export const REQUEST_EXTRA_DATA = 'REQUEST_EXTRA_DATA';


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

export const requestExtrasData = () => {
    return async (dispatch, getState) => {
        fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json/')
            .then(obj => {
                const promise = obj.json();
                promise.then(obj => {
                    dispatch({ type: REQUEST_EXTRA_DATA, payload: obj });
                })
            })
    };
};
