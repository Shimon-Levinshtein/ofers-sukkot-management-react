import { combineReducers } from 'redux';
import sukkotData from './sukkotData';
import editSukkaData from './editSukkaData';

export default combineReducers({
    sukkotData: sukkotData,
    editSukkaData: editSukkaData
});