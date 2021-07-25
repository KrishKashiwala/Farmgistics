import React, { useState } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/client';

import { CREATE_FARMER } from '../graphql/mutations';

// css imports
import './componentsCss/signup.css';

// fakedata import
import { cities } from './data/FakeData';

const SignUp = ({ show, onClose }: any) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createFarmer] = useMutation(CREATE_FARMER);
    const registered = () => {
        createFarmer({
            variables: {
                name: name,
                phone: parseInt(phone),
                city: city,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }
        });
    };
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
                            confirmPassword: ''
                        }}
                    >
                        {({ values, errors, isSubmitting, handleChange }) => (
                            <Form>
                                <Typography variant="h5">
                                    Create your account
                                </Typography>
                                <div className="modal-header"></div>
                                <br />
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
                                <br />
                                <br />
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
                                <br />
                                <br />
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
                                <br />
                                <br />
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
                                        <option
                                            key={option.label}
                                            value={option.label}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                                <br />
                                <br />
                                <TextField
                                    label="Password"
                                    name="password"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setPassword(e.target.value)}
                                    variant="outlined"
                                >
                                    password
                                </TextField>
                                        
                                <TextField
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setConfirmPassword(e.target.value)}
                                    variant="outlined"
                                >
                                    confirm password
                                </TextField>
<br /><br />                   
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    disabled={isSubmitting}
                                    onClick={registered}
                                >
                                    Submit
                                </Button>
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
