import { EDIT_EKTRA_DATA } from '../actions/HandleSukkaData';

const defaultState = {
    component: '',
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case EDIT_EKTRA_DATA:
                return action.item;
        default:
            return state;

    }
}