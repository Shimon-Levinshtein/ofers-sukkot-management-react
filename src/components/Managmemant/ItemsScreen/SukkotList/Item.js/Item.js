import React, { useState } from 'react';
import './Item.css';

import { connect } from 'react-redux';

import { editSukkaData } from '../../../../../actions/HandleSukkaData';


const Item = props => {
    return (
        <div className='item-continer'>
            <h5>קוד {props.id}</h5>
            <div className='item-containing-details-and-imges'>
                <div className='item-containing-details'>
                    <ul>
                        <li><b>גודל:</b> {props.obj.size}</li>
                        <li><b>מספר יושבים:</b> {props.obj.numberSitting}</li>
                        <li><b>סוג סוכה:</b> {props.obj.typeOfSukkah}</li>
                        <li><b>סוג בד:</b> {props.obj.fabricType}</li>
                        <li><b>סוג בד תמונה:</b> {props.obj.imageFabricType}</li>
                        <li><b>סוג סכך:</b> {props.obj.thatchType}</li>
                        <li><b>מחיר סוכה:</b> ₪{props.obj.priceSukka}</li>
                    </ul>
                </div>
                <div className='item-containing-imges'>
                    <div className='item-containing-imge'>
                        <div>תמונת סוכה</div>
                        <img src={props.obj.sukkahPicture} />
                    </div>
                    <div className='item-containing-imge'>
                        <div>תמונת גודל סוכה</div>
                        <img src={props.obj.sukkahSizeImage} />
                    </div>
                </div>
            </div>
            <div className='item-containing-buttons'>
                <button onClick={() => props.editSukkaData(props.id)}>ערוך</button>
                <button>מחק</button>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { editSukkaData })(Item);