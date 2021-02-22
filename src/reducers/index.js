import { combineReducers } from 'redux';
import sukkotData from './sukkotData';
import editSukkaData from './editSukkaData';
import focus from './focus';

export default combineReducers({
    sukkotData: sukkotData,
    editSukkaData: editSukkaData,
    focus: focus,
});