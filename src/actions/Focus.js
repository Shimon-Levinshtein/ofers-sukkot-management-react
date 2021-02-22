export const FOCUS_ELEMENT = 'FOCUS_ELEMENT';


export const focusElement = (element) => {
    return async (dispatch) => {
        dispatch({ type: FOCUS_ELEMENT, element: element });
    };
};