import React, { Component } from 'react';
import './Item.css';

import { connect } from 'react-redux';

import { editSukkaData } from '../../../../../actions/HandleSukkaData';

class Item extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        this.myRef.current.focus();
    };

    
    render() {
        return (
            <div className='item-continer' ref={this.myRef} >
                <h5>קוד {this.props.id}</h5>
                <div className='item-containing-details-and-imges'>
                    <div className='item-containing-details'>
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
                    <div className='item-containing-imges'>
                        <div className='item-containing-imge'>
                            <div>תמונת סוכה</div>
                            <img src={this.props.obj.sukkahPicture} />
                        </div>
                        <div className='item-containing-imge'>
                            <div>תמונת גודל סוכה</div>
                            <img src={this.props.obj.sukkahSizeImage} />
                        </div>
                    </div>
                </div>
                <div className='item-containing-buttons'>
                    <button onClick={() => this.props.editSukkaData(this.props.id)}>ערוך</button>
                    <button >מחק</button>
                </div>
            </div>
        );
    };
};


const mapStateToProps = state => {
    return { focusDiv: state.focus }
}
export default connect(mapStateToProps, { editSukkaData })(Item);