import { REQUEST_EXTRA_DATA} from '../actions/RequestSukkotData';
import { PUSH_EXTRAS_DATA, DELETE_EKTRA_DATA } from '../actions/HandleSukkaData';

const defaultState = {empty: true}
export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_EXTRA_DATA:
            if (!action.payload) {
                return {empty: true};
            } else {
                return action.payload;
            };
        case PUSH_EXTRAS_DATA:
                return action.payload;
        case DELETE_EKTRA_DATA:
                if (!action.payload) {
                    return {empty: true};
                } else {
                    return action.payload;
                };
        default:
            return state;

    }
}