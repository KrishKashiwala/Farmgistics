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
import { USER_POST } from '../graphql/mutations';
import { UserPost } from '../../interface';
// css imports
import './componentsCss/registerpost.css';

import { green } from '@material-ui/core/colors';
import { Redirect } from 'react-router';

const theme = createTheme({
    palette: {
        primary: green
    }
});

const Registerpost = ({ postBool, val }: any) => {
    const [title, setTitle] = useState<String>();
    const [des, setDes] = useState<String>();
    const [price, setPrice] = useState<String>();
    const [postAdded, setPostAdded] = useState<Boolean>(false);
    const [UserPost, { data, error, loading }] =
        useMutation<UserPost>(USER_POST);

    const registered = () => {
        UserPost({
            variables: {
                farmerId: val,
                title: title,
                des: des,
                price: price
            }
        });
        setPostAdded(true);
    };
    if (!data || error || loading) console.log('farmer fetch error');
    if (!postBool) {
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
                        initialValues={{}}
                    >
                        {({ values, errors, isSubmitting, handleChange }) => (
                            <Form>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h5">
                                        Create a Food Post
                                    </Typography>
                                    <div className="modal-header"></div>
                                    <br />
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Title"
                                        name="title"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setTitle(e.target.value)}
                                    >
                                        Title
                                    </TextField>
                                    <br />
                                    <br />
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="des"
                                        name="des"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setDes(e.target.value)}
                                    >
                                        Description
                                    </TextField>
                                    <br />
                                    <br />
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="price"
                                        name="price"
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setPrice(e.target.value)}
                                    >
                                        Price
                                    </TextField>
                                    <br />
                                    <br />

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
                    {postAdded && (
                        <Redirect to={`/home/profile/${val}`}></Redirect>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Registerpost;
