import React, { Component } from 'react';
import './ExtrasItem.css';

import { connect } from 'react-redux';

import { editExtrasData, deleteExtraData } from '../../../../../actions/HandleSukkaData';

class ExtrasItem extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        this.myRef.current.focus();
    };

    
    render() {
        return (
            <div className='extrasItem-item-continer' ref={this.myRef} >
                <h5>קוד {this.props.id}</h5>
                <div className='extrasItem-item-containing-details-and-imges'>
                    <div className='extrasItem-item-containing-details'>
                        <ul>
                             <li><b>שם התוספת:</b> {this.props.obj.nameExtra}</li>
                            <li><b>מחיר תוספת:</b> {this.props.obj.priceExtra}</li>
                           
                        </ul>
                    </div>
                    <div className='extrasItem-item-containing-imges'>
                        <div className='extrasItem-item-containing-imge'>
                            <div>תמונת סוכה</div>
                            <img src={this.props.obj.extrasPicture} />
                        </div>
                    </div>
                </div>
                <div className='extrasItem-item-containing-buttons'>
                    <button className='extrasItem-item-button-edit' onClick={() => this.props.editExtrasData(this.props.id)}>ערוך</button>
                    <button className='extrasItem-item-button-delete' onClick={() => this.props.deleteExtraData(this.props.id)} >מחק</button>
                </div>
            </div>
        );
    };
};


const mapStateToProps = state => {
    return { focusDiv: state.focus }
}
export default connect(mapStateToProps, { editExtrasData, deleteExtraData })(ExtrasItem);