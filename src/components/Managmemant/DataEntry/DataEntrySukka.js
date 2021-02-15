import React, { useState } from 'react';
import './DataEntrySukka.css';

import { Formik, Form, Field } from 'formik';
import { Container, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { pushSukkaData } from '../../../actions/HandleSukkaData';
import { addFile, deleteFile } from '../../../HandleFirebase'; //sukkahPicture-1613299807227



const DataEntrySukka = props => {

    const [sukkahPicture, setSukkahPicture] = useState('');
    const [sukkahPictureId, setSukkahPictureId] = useState('');
    const [size, setSize] = useState('');
    const [numberSitting, setNumberSitting] = useState('');
    const [typeOfSukkah, setTypeOfSukkah] = useState('');
    const [fabricType, setFabricType] = useState('');
    const [imageFabricType, setImageFabricType] = useState('');
    const [thatchType, setThatchType] = useState('');
    const [sukkahSizeImage, setSukkahSizeImage] = useState('');
    const [sukkahSizeImageId, setSukkahSizeImageId] = useState('');
    const [priceSukka, setPriceSukka] = useState('');

    const handleSudmit = () => {
        const dataForm = {
            sukkahPicture: sukkahPicture,
            size: size,
            numberSitting: numberSitting,
            typeOfSukkah: typeOfSukkah,
            fabricType: fabricType,
            imageFabricType: imageFabricType,
            thatchType: thatchType,
            sukkahSizeImage: sukkahSizeImage,
            priceSukka: priceSukka,
        }
        props.pushSukkaData(dataForm);
        setSukkahPicture('');
        setSukkahPictureId('');
        setSize('');
        setNumberSitting('');
        setTypeOfSukkah('');
        setFabricType('');
        setImageFabricType('');
        setThatchType('');
        setSukkahSizeImage('');
        setSukkahSizeImageId('');
        setPriceSukka('');
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
    }
    const sizeChange = (e) => {
        setSize(e.currentTarget.value);
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
    };
    const priceSukkaChange = (e) => {
        setPriceSukka(e.currentTarget.value);
    };


    return (
        <Container>
            <Formik initialValues={{ sukkahPicture: '' }} onSubmit={handleSudmit} >
                <div className="dataEntrySukka-div-product-details">
                    <Form>
                        <div className='dataEntrySukka-contind-input-file'>
                            <div>
                                <label htmlFor="sukkahPicture">תמונה סוכה</label>
                                <Input type="file" id="sukkahPicture" name="sukkahPicture" onChange={sukkahPictureChange} />
                            </div>
                            <div className='dataEntrySukka-contind-input-file-img'>
                                <div >
                                    <img src={sukkahPicture} />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="size">גודל</label>
                        <Field type="text" id="size" name="size" onChange={sizeChange} placeholder="גודל" value={size} required />
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
                                <Input type="file" id="sukkahSizeImage" name="sukkahSizeImage" onChange={sukkahSizeImageChange} />
                            </div>
                            <div className='dataEntrySukka-contind-input-file-img'>
                                <div >
                                    <img src={sukkahSizeImage} />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="priceSukka">מחיר סוכה</label>
                        <Field type="number" id="priceSukka" name="priceSukka" onChange={priceSukkaChange} placeholder="מחיר סוכה" value={priceSukka} required />

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
export default connect(mapStateToProps, { pushSukkaData })(DataEntrySukka);