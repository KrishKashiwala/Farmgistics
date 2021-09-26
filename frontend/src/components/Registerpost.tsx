import { useState } from 'react';
import storage from '../Firebase/config';
import {
    TextField,
    Button
} from '@material-ui/core';
import { useMutation } from '@apollo/client';
//@ts-ignore
import { USER_POST } from '../graphql/mutations';
import { UserPost } from '../../interface';
// css imports
import './componentsCss/registerpost.css';
import { LinearProgress } from '@material-ui/core';
import { Redirect } from 'react-router';


const Registerpost = ({ postBool, val }: any) => {
    const [title, setTitle] = useState<String>();
    const [des, setDes] = useState<String>();
    const [price, setPrice] = useState<String>();
    const [city, setCity] = useState<String>();
    const [photo, setPhoto] = useState<String>();
    const [progress, setProgress] = useState(0);
    const [UserPost, { data, error, loading }] =
        useMutation<UserPost>(USER_POST);

    const handleImage = e => {
        try {
            var st = storage.ref();
            const file = e.target.files[0]
            const uploadTask = st.child('Photo/' + file.name).put(file)
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const Done = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                    setProgress(Done)
                },
                error => {
                    console.log(error)
                },
                async () => {
                    await uploadTask.snapshot.ref.getDownloadURL()
                        .then(downloadURL => {
                            console.log(downloadURL);
                            setPhoto(downloadURL);
                        })
                        .catch(err => console.log(err))
                }
            )
        } catch (err) {
            console.log(err)
        }
    }

    const registered = () => {
        UserPost({
            variables: {
                farmerId: val,
                title: title,
                des: des,
                price: price,
                // for photo link use photo like photo: photo,
            }
        });
        <Redirect to='/profile'/>
    };
    if (!data || error || loading) console.log('farmer fetch error');
    if (!postBool) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <h3>Add a Product</h3>
                    <form onSubmit={registered}>
                        <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={ e =>setTitle(e.target.value)}/>
                        <TextField id="outlined-basic" label="Description" variant="outlined" value={des} onChange={ e => setDes(e.target.value)}/>
                        <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={ e => setPrice(e.target.value)}/>
                        <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={ e => setCity(e.target.value)}/>
                        <TextField type="file" id="outlined-basic" label="Photo" variant="outlined" onChange={ e => handleImage(e)}/>
                        <Button type='submit' variant="contained" color="primary">Submit</Button>
                    </form>
                    <LinearProgress value={progress} />
                </div>
            </div>
        </div>
    );
};
export default Registerpost;
