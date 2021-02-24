import { combineReducers } from 'redux';
import sukkotData from './sukkotData';
import editSukkaData from './editSukkaData';
import editExraData from './editExraData';
import extraData from './extraData';
import focus from './focus';

export default combineReducers({
    sukkotData: sukkotData,
    editSukkaData: editSukkaData,
    editExraData: editExraData,
    extraData: extraData,
    focus: focus,
});