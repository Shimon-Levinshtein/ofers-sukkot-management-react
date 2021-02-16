import React, { useState, useRef } from 'react';
import './Extras.css';

import { Formik, Form, Field } from 'formik';
import { Container, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { pushExtrasData } from '../../../actions/HandleSukkaData';
import { addFile, deleteFile } from '../../../HandleFirebase'; //sukkahPicture-1613299807227



const Extras = props => {

    const [extrasPicture, setExtrasPicture] = useState('');
    const [extrasPictureErr, setExtrasPictureErr] = useState('');
    const refExtrasPicture = useRef();
    const [extrasPictureId, setExtrasPictureId] = useState('');
    const [nameExtra, setNameExtra] = useState('');
    const [priceExtra, setPriceExtra] = useState('');
    

    const handleSudmit = () => {
        if (!extrasPicture) {
            setExtrasPictureErr('* לא נבחרה תמונה לתוספת! חובה לבחור תמונה');
            refExtrasPicture.current.focus();
            return;
        }
        const dataForm = {
            extrasPicture: extrasPicture,
            nameExtra: nameExtra,
            priceExtra: priceExtra,
        }
        props.pushExtrasData(dataForm);
        setExtrasPicture('');
        setExtrasPictureId('');
        setNameExtra('');
        setPriceExtra('');
        setExtrasPictureErr('');
        refExtrasPicture.current.value = "";

    };



    const extrasPictureChange = (e) => {
        if (extrasPicture) {
            deleteFile(extrasPictureId, 'extrasPicture')
                .then(() => {
                    const iunikId = 'extrasPicture-' + new Date().getTime().toString();
                    addFile(iunikId, e.target.files[0], "extrasPicture")
                        .then(url => {
                            setExtrasPicture(url)
                            setExtrasPictureId(iunikId);
                        })
                })
        } else {
            const iunikId = 'extrasPicture-' + new Date().getTime().toString();
            addFile(iunikId, e.target.files[0], "extrasPicture")
                .then(url => {
                    setExtrasPicture(url)
                    setExtrasPictureId(iunikId);
                })
        };
        setExtrasPictureErr('');

    }
    const nameExtraChange = (e) => {
        setNameExtra(e.currentTarget.value);
    }
    const priceExtraChange = (e) => {
        setPriceExtra(e.currentTarget.value);
    }


    return (
        <Container>
            <Formik initialValues={{ extrasPicture: '' }} onSubmit={handleSudmit} >
                <div className="extras-div-product-details">
                    <Form>
                        <div className='extras-contind-input-file'>
                            <div>
                                <label htmlFor="extrasPicture">תמונת תוספת</label>
                                {extrasPictureErr && <div className='extras-err-message'>{extrasPictureErr}</div>}
                                <input type="file" ref={refExtrasPicture} id="extrasPicture" name="extrasPicture" onChange={extrasPictureChange} />
                            </div>
                            <div className='extras-contind-input-file-img'>
                            <div >
                                <img src={extrasPicture} />
                            </div>
                            </div>
                        </div>
                        <label htmlFor="name">שם התוספת</label>
                        <Field type="text" id="name" name="name" onChange={nameExtraChange} placeholder="שם התוספת" value={nameExtra} required />
                        <label htmlFor="place">מחיר תוספת</label>
                        <Field type="number" id="place" name="place" onChange={priceExtraChange} placeholder="מחיר תוספת" value={priceExtra} required />

                        <Button type="submit">שמור</Button>
                    </Form>

                </div>
            </Formik>
        </Container>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { pushExtrasData })(Extras);