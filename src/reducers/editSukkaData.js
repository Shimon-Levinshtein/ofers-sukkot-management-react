import { EDIT_SUKKA_DATA } from '../actions/HandleSukkaData';

const defaultState = {
    component: '',
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case EDIT_SUKKA_DATA:
                return action.item;
        default:
            return state;

    }
}