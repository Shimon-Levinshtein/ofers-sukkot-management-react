import React, { useState, useRef, useEffect } from 'react';
import './Extras.css';

import { Formik, Form, Field } from 'formik';
import { Container, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { pushExtrasData, pushChangesExtraData } from '../../../actions/HandleSukkaData';
import { addFile, deleteFile } from '../../../HandleFirebase'; //sukkahPicture-1613299807227



const Extras = props => {

    const [editItem, setEditItem] = useState(false);

    const [extrasPicture, setExtrasPicture] = useState('');
    const [extrasPictureErr, setExtrasPictureErr] = useState('');
    const refExtrasPicture = useRef();
    const [extrasPictureId, setExtrasPictureId] = useState('');
    const [nameExtra, setNameExtra] = useState('');
    const [priceExtra, setPriceExtra] = useState('');

    useEffect(
        () => {
            if (props.editExraData.id) {
                setEditItem(true);
                setExtrasPicture(props.editExraData.extrasPicture);
                setExtrasPictureId(props.editExraData.extrasPictureId);
                setNameExtra(props.editExraData.nameExtra);
                setPriceExtra(props.editExraData.priceExtra);
                setExtrasPictureErr('');
                refExtrasPicture.current.value = "";
            };
        },
        [props.editExraData.id],
    );

    const handleCancel = (e) => {
        setExtrasPicture('');
        setExtrasPictureId('');
        setNameExtra('');
        setPriceExtra('');
        setExtrasPictureErr('');
        refExtrasPicture.current.value = "";
        setEditItem(false);
    };

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
            extrasPictureId: extrasPictureId,
        }
        if (editItem) {
            dataForm.id = props.editExraData.id;
            props.pushChangesExtraData(dataForm);
            setEditItem(false);
        } else {
            props.pushExtrasData(dataForm);
        };
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
                    {editItem ? <h2>ערוך תוספת, קוד: {props.editExraData.id}</h2> : <h2>תוספת חדשה</h2>}
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

                        <Button className='extras-button-save' type="submit">{editItem ? 'שמור שינויים' : 'שמור'}</Button>
                        <Button onClick={handleCancel} className='extras-button-cancel'>ביטול</Button>
                    </Form>

                </div>
            </Formik>
        </Container>
    );
};


const mapStateToProps = state => {
    return { editExraData: state.editExraData }
}
export default connect(mapStateToProps, { pushExtrasData, pushChangesExtraData })(Extras);