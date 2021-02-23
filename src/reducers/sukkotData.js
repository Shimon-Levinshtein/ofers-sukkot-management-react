import { REQUEST_SUKKOT_DATA } from '../actions/RequestSukkotData';
import { PUSH_SUKKA_DATA, DELETE_SUKKA_DATA } from '../actions/HandleSukkaData';

const defaultState = {empty: true}
export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_SUKKOT_DATA:
            if (!action.payload) {
                return {empty: true};
            } else {
                return action.payload;
            };
        case PUSH_SUKKA_DATA:
                return action.item;
        case DELETE_SUKKA_DATA:
                return action.item;
        default:
            return state;

    }
}