import { useState } from 'react';
import firebaseApp from '../Firebase';
import { TextField, Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';
//@ts-ignore
import { USER_POST } from '../graphql/mutations';
import { post, postArray } from '../../interface';
// css imports
import './componentsCss/registerpost.css';

import { Redirect, useHistory } from 'react-router-dom';
import { cities, cropTypes } from './data/FakeData';

const Registerpost = ({ postBool, val, setPostBool }: any) => {
    const history = useHistory();

    const [title, setTitle] = useState<String>();
    const [des, setDes] = useState<String>();
    const [price, setPrice] = useState<String>();
    const [city, setCity] = useState<String>();
    const [cropType, setCropType] = useState<String>('');
    const [url, setURL] = useState('');
    const [progress, setProgress] = useState(0);
    const [
        UserPost,
        {
            data: data_userPost,
            error: error_userPost,
            loading: loading_userPost
        }
    ] = useMutation<postArray>(USER_POST);

    const handleChange = (e) => {
        try {
            var st = firebaseApp.storage().ref();
            const file = e.target.files[0];
            const uploadTask = st.child('Photos/' + file.name).put(file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const Done = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(Done);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then((downloadURL) => {
                            console.log(downloadURL);
                            setURL(downloadURL);
                        })
                        .catch((err) => console.log(err));
                }
            );
        } catch (err) {
            console.log(err);
        }
    };
    const register = (e) => {
        e.preventDefault();

        UserPost({
            variables: {
                farmerId: val,
                title: title,
                des: des,
                price: price,
                url: url,
                cropType: cropType,
                city: city
            }
        });

        console.log(url);

        history.push('/profile');
    };

    if (!postBool) {
        return null;
    }

    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div id="register" className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <h3>Add a Product</h3>
                    <form onSubmit={register}>
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                            type="file"
                            name="photo"
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            select
                            label="Crop Type"
                            name="cropType"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setCropType(e.target.value)}
                            helperText="Select Crop Type"
                            variant="outlined"
                        >
                            {cropTypes.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Price"
                            variant="outlined"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <TextField
                            select
                            label="City"
                            name="city"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setCity(e.target.value)}
                            helperText="Please select your city"
                            variant="outlined"
                        >
                            {cities.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={() => setPostBool(false)}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registerpost;
