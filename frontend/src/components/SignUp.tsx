import React, { useState } from 'react';
import {
    TextField,
    ThemeProvider,
    createTheme,
    Typography,
    Button
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/client';
//@ts-ignore
import { CREATE_FARMER } from '../graphql/mutations';
import { farmer } from '../../interface';
// css imports
import './componentsCss/signup.css';

import { green } from '@material-ui/core/colors';
// fakedata import
import { cities } from './data/FakeData';
import firebaseApp from '../Firebase';

const theme = createTheme({
    palette: {
        primary: green
    }
});

const SignUp = ({ show }: any) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [progress, setProgress] = useState(0);
    const [createFarmer, { data, error, loading }] =
        useMutation<farmer>(CREATE_FARMER);

    const handleProfile = (e) => {
        try {
            var st = firebaseApp.storage().ref();
            const file = e.target.files[0];
            const uploadTask = st.child('User-Photos/' + file.name).put(file);
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
                            setPhoto(downloadURL);
                        })
                        .catch((err) => console.log(err));
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    const registered = () => {
        createFarmer({
            variables: {
                name: name,
                phone: phone,
                city: city,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                image: photo
            }
        });

        localStorage.setItem('farmer-id', `${data.getByIdFarmers.id}`);

        console.log(photo);
    };
    if (loading || !data || error) console.log('error');
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <Formik
                        onSubmit={(data, { setSubmitting }) => {
                            setSubmitting(true);
                            console.log(data);
                            setSubmitting(false);
                        }}
                        validateOnChange={true}
                        initialValues={{
                            name: '',
                            phone: '',
                            city: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            image: ''
                        }}
                    >
                        {({ values, errors, isSubmitting, handleChange }) => (
                            <Form>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h5">
                                        Create your account
                                    </Typography>
                                    <div className="modal-header"></div>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Name"
                                        name="name"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setName(e.target.value)}
                                    >
                                        First Name
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Profile Photo"
                                        name="name"
                                        type="file"
                                        onChange={(e) => handleProfile(e)}
                                    >
                                        Profile Photo
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Email"
                                        name="email"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setEmail(e.target.value)}
                                    >
                                        email
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Phone"
                                        name="phone"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setPhone(e.target.value)}
                                    >
                                        phone number
                                    </TextField>
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
                                    <TextField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setPassword(e.target.value)}
                                        variant="outlined"
                                    >
                                        password
                                    </TextField>
                                    &nbsp;&nbsp;&nbsp;
                                    <TextField
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setConfirmPassword(e.target.value)}
                                        variant="outlined"
                                    >
                                        confirm password
                                    </TextField>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSubmitting}
                                        onClick={registered}
                                    >
                                        Submit
                                    </Button>
                                </ThemeProvider>
                            </Form>
                        )}
                    </Formik>
                </div>
                {/* <div className="modal-footer">
                    <button className="btn" onClick={onClose}>
                        Close
                    </button>
                </div> */}
            </div>
        </div>
    );
};
export default SignUp;
