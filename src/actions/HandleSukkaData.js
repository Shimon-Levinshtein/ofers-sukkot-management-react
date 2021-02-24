export const PUSH_SUKKA_DATA = 'PUSH_SUKKA_DATA';
export const PUSH_EXTRAS_DATA = 'PUSH_EXTRAS_DATA';
export const EDIT_SUKKA_DATA = 'EDIT_SUKKA_DATA';
export const EDIT_EKTRA_DATA = 'EDIT_EKTRA_DATA';
export const DELETE_SUKKA_DATA = 'DELETE_SUKKA_DATA';
export const DELETE_EKTRA_DATA = 'DELETE_EKTRA_DATA';

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
        fetch(
            `https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots/${obj.id}.json`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...obj })
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

export const deleteSukkaData = (id) => {
    return async (dispatch) => {
        fetch(
            `https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots/${id}.json`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots.json/')
                .then(obj => {
                    const promise = obj.json();
                    promise.then(obj => {
                        console.log(obj);
                        dispatch({ type: DELETE_SUKKA_DATA, item: obj });
                    })
                })
        })
    };
};

// * Extra

export const pushExtrasData = (obj) => {
    return async (dispatch, getState) => {
        fetch(
            `https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        ).then(result => {
            const promise = result.json();
            promise.then(() => {
                fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json/')
                    .then(obj => {
                        const promise = obj.json();
                        promise.then(obj => {
                            dispatch({ type: PUSH_EXTRAS_DATA, payload: obj });
                        })
                    })
            })
        })

    };
};

export const editExtrasData = (id) => {
    return async (dispatch, getState) => {
        const objItems = getState().extraData;
        objItems[id].id = id;
        dispatch({ type: EDIT_EKTRA_DATA, item: objItems[id] });
    };
};

export const pushChangesExtraData = (obj) => {
    return async (dispatch) => {
        fetch(
            `https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras/${obj.id}.json`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...obj })
            }
        ).then(result => {
            const promise = result.json();
            promise.then(() => {
                fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json/')
                    .then(obj => {
                        const promise = obj.json();
                        promise.then(obj => {
                            dispatch({ type: PUSH_EXTRAS_DATA, payload: obj });
                        })
                    })
            })
        })
    };
};

export const deleteExtraData = (id) => {
    return async (dispatch) => {
        fetch(
            `https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras/${id}.json`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json/')
                .then(obj => {
                    const promise = obj.json();
                    promise.then(obj => {
                        dispatch({ type: DELETE_EKTRA_DATA, payload: obj });
                    })
                })
        })
    };
};
