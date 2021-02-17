import { REQUEST_SUKKOT_DATA } from '../actions/RequestSukkotData';

const defaultState = {empty: true}
export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_SUKKOT_DATA:
            if (!action.payload) {
                return {empty: true};
            } else {
                return action.payload;
            };
        default:
            return state;

    }
}