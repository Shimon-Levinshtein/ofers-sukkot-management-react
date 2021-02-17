import React, { useState, useEffect } from 'react';
import './SukkotList.css';

import { connect } from 'react-redux';

import Item from './Item/Item';

import { requestSukkotData } from '../../../../actions/RequestSukkotData';

const SukkotList = props => {
    const [mounted, setMounted] = useState(false);
    if (!mounted) {
        props.requestSukkotData()
    };

    useEffect(() => {
        setMounted(true)
    }, []);

    const hendlerList = () => {
        const obj = props.sukkotDataObj;
        if (obj.empty) {
            return <h3>אין פריטים! תוסיף פריטים למסך.</h3>
        }
        return Object.keys(obj).map((item, i) => (
            <Item id={item} key={i} obj={obj[item]}/>
          ))
    }

    return (
        <div className='sukkotList-continer'>
            {hendlerList()}
        </div>
    );
};


const mapStateToProps = state => {
    return { sukkotDataObj: state.sukkotData }
}
export default connect(mapStateToProps, { requestSukkotData })(SukkotList);