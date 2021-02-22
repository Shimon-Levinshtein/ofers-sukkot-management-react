import { FOCUS_ELEMENT } from '../actions/Focus';

const defaultState = {};
export default (state = defaultState, action) => {
    switch (action.type) {
        case FOCUS_ELEMENT:
                return action.element;
        default:
            return state;

    }
}