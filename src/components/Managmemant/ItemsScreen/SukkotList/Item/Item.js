import React, { useState } from 'react';
import './Item.css';

import { connect } from 'react-redux';


const Item = props => {
    console.log(props.obj);
    return (
        <div className='item-continer'>
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
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(Item);