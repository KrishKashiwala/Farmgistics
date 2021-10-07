import React from "react";
import { Redirect } from "react-router-dom";

const ContactUs = () => {
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <h1>This is Contact Us Page</h1>
    </div>
  );
};

export default ContactUs;
