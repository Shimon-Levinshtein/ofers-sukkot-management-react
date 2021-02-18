import React, { useState, useRef, useEffect } from 'react';
import './DataEntrySukka.css';

import { Formik, Form, Field } from 'formik';
import { Container, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { pushSukkaData } from '../../../actions/HandleSukkaData';
import { requestSukkotData } from '../../../actions/RequestSukkotData';
import { addFile, deleteFile } from '../../../HandleFirebase'; //sukkahPicture-1613299807227



const DataEntrySukka = props => {


    const [editItem, setEditItem] = useState(false);

    const [sukkahPicture, setSukkahPicture] = useState('');
    const [sukkahPictureErr, setSukkahPictureErr] = useState('');
    const refSukkahPicture = useRef();
    const [sukkahPictureId, setSukkahPictureId] = useState('');
    const [size, setSize] = useState('');
    const [sizeErr, setSizeErr] = useState('');
    const refSize = useRef();
    const [numberSitting, setNumberSitting] = useState('');
    const [typeOfSukkah, setTypeOfSukkah] = useState('');
    const [fabricType, setFabricType] = useState('');
    const [imageFabricType, setImageFabricType] = useState('');
    const [thatchType, setThatchType] = useState('');
    const [sukkahSizeImage, setSukkahSizeImage] = useState('');
    const [sukkahSizeImageErr, setSukkahSizeImageErr] = useState('');
    const refSukkahSizeImage = useRef();
    const [sukkahSizeImageId, setSukkahSizeImageId] = useState('');
    const [priceSukka, setPriceSukka] = useState('');

    useEffect(
        () => {
            if (props.editSukkaData.id) {
                console.log(props.editSukkaData);
                setEditItem(true);
                setSukkahPicture(props.editSukkaData.sukkahPicture);
                setSukkahPictureErr('');
                setSukkahPictureId(props.editSukkaData.sukkahPictureId);
                setSize(props.editSukkaData.size);
                setNumberSitting(props.editSukkaData.numberSitting);
                setTypeOfSukkah(props.editSukkaData.typeOfSukkah);
                setFabricType(props.editSukkaData.fabricType);
                setImageFabricType(props.editSukkaData.imageFabricType);
                setThatchType(props.editSukkaData.thatchType);
                setSukkahSizeImage(props.editSukkaData.sukkahSizeImage);
                setSukkahSizeImageId(props.editSukkaData.sukkahSizeImageId);
                setSukkahSizeImageErr('');
                setPriceSukka(props.editSukkaData.priceSukka);
                refSukkahPicture.current.value = "";
                refSukkahSizeImage.current.value = "";
            };
        },
        [props.editSukkaData.id],
    );

    const handleSudmit = (e) => {
        if (sizeErr) {
            refSize.current.focus();
            return;
        } else if (!sukkahPicture) {
            refSukkahPicture.current.focus();
            setSukkahPictureErr(' * לא נבחרה תמונה סוכה! חובה לבחור תמונה.');
            return;
        } else if (!sukkahSizeImage) {
            refSukkahSizeImage.current.focus();
            setSukkahSizeImageErr(' * לא נבחרה תמונה גודל סוכה! חובה לבחור תמונה.');
            return;
        }
        const dataForm = {
            sukkahPicture: sukkahPicture,
            sukkahPictureId: sukkahPictureId,
            size: size,
            numberSitting: numberSitting,
            typeOfSukkah: typeOfSukkah,
            fabricType: fabricType,
            imageFabricType: imageFabricType,
            thatchType: thatchType,
            sukkahSizeImage: sukkahSizeImage,
            sukkahSizeImageId: sukkahSizeImageId,
            priceSukka: priceSukka,
        }
        props.pushSukkaData(dataForm);
        setSukkahPicture('');
        setSukkahPictureErr('');
        setSukkahPictureId('');
        setSize('');
        setNumberSitting('');
        setTypeOfSukkah('');
        setFabricType('');
        setImageFabricType('');
        setThatchType('');
        setSukkahSizeImage('');
        setSukkahSizeImageId('');
        setSukkahSizeImageErr('');
        setPriceSukka('');
        refSukkahPicture.current.value = "";
        refSukkahSizeImage.current.value = "";
    };



    const sukkahPictureChange = (e) => {
        if (sukkahPicture) {
            deleteFile(sukkahPictureId, 'sukkahImage')
                .then(() => {
                    const iunikId = 'sukkahPicture-' + new Date().getTime().toString();
                    addFile(iunikId, e.target.files[0], "sukkahImage")
                        .then(url => {
                            setSukkahPicture(url)
                            setSukkahPictureId(iunikId);
                        })
                })
        } else {
            const iunikId = 'sukkahPicture-' + new Date().getTime().toString();
            addFile(iunikId, e.target.files[0], "sukkahImage")
                .then(url => {
                    setSukkahPicture(url)
                    setSukkahPictureId(iunikId);
                })
        }
        setSukkahPictureErr('');
    }
    const sizeChange = (e) => {
        const value = e.currentTarget.value
        if (value.includes('/') || value.includes('*')) {
            setSize(value);
            setSizeErr('')
        } else {
            setSize(value);
            setSizeErr('* הגודל חייב להיות ככה 23.5/63  או 23.5*60 לדוגמה ');
        }
    };
    const numberSittingChange = (e) => {
        setNumberSitting(e.currentTarget.value);
    };
    const typeOfSukkahChange = (e) => {
        setTypeOfSukkah(e.currentTarget.value);
    };
    const fabricTypeChange = (e) => {
        setFabricType(e.currentTarget.value);
    };
    const imageFabricTypeChange = (e) => {
        setImageFabricType(e.currentTarget.value);
    };
    const thatchTypeChange = (e) => {
        setThatchType(e.currentTarget.value);
    };
    const sukkahSizeImageChange = (e) => {
        setSukkahSizeImage(e.target.files[0]);
        if (sukkahSizeImage) {
            deleteFile(sukkahSizeImageId, 'sukkahSizeImage')
                .then(() => {
                    const iunikId = 'sukkahSizeImage-' + new Date().getTime().toString();
                    addFile(iunikId, e.target.files[0], "sukkahSizeImage")
                        .then(url => {
                            setSukkahSizeImage(url)
                            setSukkahSizeImageId(iunikId);
                        })
                })
        } else {
            const iunikId = 'sukkahSizeImage-' + new Date().getTime().toString();
            addFile(iunikId, e.target.files[0], "sukkahSizeImage")
                .then(url => {
                    setSukkahSizeImage(url)
                    setSukkahSizeImageId(iunikId);
                })
        }
        setSukkahSizeImageErr('');
    };
    const priceSukkaChange = (e) => {
        setPriceSukka(e.currentTarget.value);
    };

    return (
        <Container>
            <Formik initialValues={{ sukkahPicture: '' }} onSubmit={handleSudmit} >
                <div className="dataEntrySukka-div-product-details">
                {editItem ? <h2>ערוך סוכה, קוד: {props.editSukkaData.id}</h2> : <h2>סוכה חדשה</h2>}
                    <Form>
                        <div className='dataEntrySukka-contind-input-file'>
                            <div>
                                <label htmlFor="sukkahPicture">תמונה סוכה</label>
                                {sukkahPictureErr && <div className='dataEntrySukka-err-message'>{sukkahPictureErr}</div>}
                                <input type="file" ref={refSukkahPicture} id="sukkahPicture" name="sukkahPicture" onChange={sukkahPictureChange} />
                            </div>
                            <div className='dataEntrySukka-contind-input-file-img'>
                                <div >
                                    <img src={sukkahPicture} />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="size">גודל</label>
                        {sizeErr && <div className='dataEntrySukka-err-message'>{sizeErr}</div>}
                        <input type="text" id="size" name="size" ref={refSize} onChange={sizeChange} placeholder="הגודל חייב להיות ככה 23.5/63  או 23.5*60 לדוגמה" value={size} required />
                        <label htmlFor="numberSitting">מספר יושבים</label>
                        <Field type="number" id="numberSitting" name="numberSitting" onChange={numberSittingChange} placeholder="מספר יושבים" value={numberSitting} required />
                        <label htmlFor="typeOfSukkah">סוג סוכה</label>
                        <Field type="text" id="typeOfSukkah" name="typeOfSukkah" onChange={typeOfSukkahChange} placeholder="סוג סוכה" value={typeOfSukkah} required />
                        <label htmlFor="fabricType">סוג בד</label>
                        <Field type="text" id="fabricType" name="fabricType" onChange={fabricTypeChange} placeholder="סוג בד" value={fabricType} required />
                        <label htmlFor="imageFabricType">סוג בד תמונה</label>
                        <Field type="text" id="imageFabricType" name="imageFabricType" onChange={imageFabricTypeChange} placeholder="סוג בד תמונה" value={imageFabricType} required />
                        <label htmlFor="thatchType">סוג סכך</label>
                        <Field type="text" id="thatchType" name="thatchType" onChange={thatchTypeChange} placeholder="סוג סכך" value={thatchType} required />
                        <div className='dataEntrySukka-contind-input-file'>
                            <div>
                                <label htmlFor="sukkahSizeImage">תמונת גודל סוכה</label>
                                {sukkahSizeImageErr && <div className='dataEntrySukka-err-message'>{sukkahSizeImageErr}</div>}
                                <input type="file" ref={refSukkahSizeImage} id="sukkahSizeImage" name="sukkahSizeImage" onChange={sukkahSizeImageChange} />
                            </div>
                            <div className='dataEntrySukka-contind-input-file-img'>
                                <div >
                                    <img src={sukkahSizeImage} />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="priceSukka">מחיר סוכה</label>
                        <Field type="number" id="priceSukka" name="priceSukka" onChange={priceSukkaChange} placeholder="מחיר סוכה" value={priceSukka} required />

                        <Button type="submit">{editItem ? 'שמור שינויים' : 'שמור'}</Button>
                    </Form>
                </div>
            </Formik>
        </Container>
    );
};


const mapStateToProps = state => {
    return { editSukkaData: state.editSukkaData }
}
export default connect(mapStateToProps, { pushSukkaData, requestSukkotData })(DataEntrySukka);