import React, { Component } from 'react';
import './Item.css';

import { connect } from 'react-redux';

import { editSukkaData, deleteSukkaData } from '../../../../../actions/HandleSukkaData';

class Item extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        this.myRef.current.focus();
    };

    
    render() {
        return (
            <div className='sukkotList-item-continer' ref={this.myRef} >
                <h5>קוד {this.props.id}</h5>
                <div className='sukkotList-item-containing-details-and-imges'>
                    <div className='sukkotList-item-containing-details'>
                        <ul>
                            <li><b>גודל:</b> {this.props.obj.size}</li>
                            <li><b>מספר יושבים:</b> {this.props.obj.numberSitting}</li>
                            <li><b>סוג סוכה:</b> {this.props.obj.typeOfSukkah}</li>
                            <li><b>סוג בד:</b> {this.props.obj.fabricType}</li>
                            <li><b>סוג בד תמונה:</b> {this.props.obj.imageFabricType}</li>
                            <li><b>סוג סכך:</b> {this.props.obj.thatchType}</li>
                            <li><b>מחיר סוכה:</b> ₪{this.props.obj.priceSukka}</li>
                        </ul>
                    </div>
                    <div className='sukkotList-item-containing-imges'>
                        <div className='sukkotList-item-containing-imge'>
                            <div>תמונת סוכה</div>
                            <img src={this.props.obj.sukkahPicture} />
                        </div>
                        <div className='sukkotList-item-containing-imge'>
                            <div>תמונת גודל סוכה</div>
                            <img src={this.props.obj.sukkahSizeImage} />
                        </div>
                    </div>
                </div>
                <div className='sukkotList-item-containing-buttons'>
                    <button className='sukkotList-item-button-edit' onClick={() => this.props.editSukkaData(this.props.id)}>ערוך</button>
                    <button className='sukkotList-item-button-delete' onClick={() => this.props.deleteSukkaData(this.props.id)} >מחק</button>
                </div>
            </div>
        );
    };
};


const mapStateToProps = state => {
    return { focusDiv: state.focus }
}
export default connect(mapStateToProps, { editSukkaData, deleteSukkaData })(Item);