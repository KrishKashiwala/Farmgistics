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
import { USER_POST, FIND_FARMER } from '../graphql/mutations';

// css imports
import './componentsCss/registerpost.css';

import { green } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: green
    }
});
interface farmer {
    getByIdFarmers: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: String;
    };
}
interface UserPost {
    UserPost: {
        title?: String;
        des?: String;
        city?: String;
        price?: String;
        farmerId?: String;
    };
}
const Registerpost = ({ postBool }: any) => {
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [price, setPrice] = useState('');
    const [UserPost] = useMutation<UserPost>(USER_POST);
    const [getByIdFarmers, { data, error }] = useMutation<farmer>(FIND_FARMER);
    const registered = () => {
        UserPost({
            variables: {
                farmerId: data?.getByIdFarmers.id,
                city: data?.getByIdFarmers.city,
                title: title,
                des: des,
                price: price
            }
        });
    };
    //     if (!datas || errors) console.log('post error');
    if (!data || error) console.log('farmer fetch error');
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
                </div>
            </div>
        </div>
    );
};
export default Registerpost;
