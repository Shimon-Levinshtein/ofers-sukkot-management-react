import React, { useState, useEffect } from 'react';
import './ExtrasList.css';

import { connect } from 'react-redux';

import Item from './Item/ExtrasItem';

import { requestExtrasData } from '../../../../actions/RequestSukkotData';

const ExtrasList = props => {
    const [mounted, setMounted] = useState(false);
    if (!mounted) {
        props.requestExtrasData()
    };

    useEffect(() => {
        setMounted(true)
    }, []);

    const hendlerList = () => {
        const obj = props.extraDataObj;
        if (obj.empty) {
            return <h3>אין פריטים! תוסיף פריטים למסך.</h3>
        }
        return Object.keys(obj).map((item, i) => (
            <Item id={item} key={i} obj={obj[item]} />
        ))
    }

    return (
        <div className='extrasList-continer'>
            <h1>רשימת תוספות: {Object.keys(props.extraDataObj).length} תוספות</h1>
            <div className='extrasList-contining-items' id="extrasList-contining-items-style-15">
                {hendlerList()}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return { extraDataObj: state.extraData }
}
export default connect(mapStateToProps, { requestExtrasData })(ExtrasList);