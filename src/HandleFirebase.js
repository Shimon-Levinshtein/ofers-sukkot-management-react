import { storage } from "./firebase/firebase"



export const addFile = (imageFileName, imageData, imageFolder) => {

    return new Promise((resolve, reject) => {
        if (imageData === '') {
            console.error(`not an image, the image file is a ${typeof (imageFileName)}`);
            reject(`not an image, the image file is a ${typeof (imageFileName)}`);
        }
        const uploadTask = storage.ref(`/${imageFolder}/${imageFileName}`).put(imageData)//e.target.files[0]
        uploadTask.on('state_changed',
            (snapShot) => {
                // console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref(imageFolder).child(imageFileName).getDownloadURL()
                    .then(fireBaseUrl => {
                        resolve(fireBaseUrl);
                    })
            })

    });
};

export const deleteFile = (imageFileName, imageFolder) => {
    return new Promise((resolve, reject) => {
        if (imageFileName === '') {
            console.error(`not an image, the image file is a ${typeof (imageFileName)}`);
            reject(`not an image, the image file is a ${imageFileName}`);
        }
        const desertRef = storage.ref(`/${imageFolder}/${imageFileName}`);
        desertRef.delete().then(() => {
            // console.log('deleted!');
            resolve('deleted!');
        }).catch((error) => {
            console.log('Not deleted! err' + error);
            reject('Not deleted! err' + error);
        });
    });
};



