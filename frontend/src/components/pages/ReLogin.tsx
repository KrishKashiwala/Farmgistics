import React, { useState } from "react";
import { Redirect } from "react-router";
const ReLogin = () => {
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <h1>
        {setTimeout(() => {
          <h1>Redirecting to login page.....</h1>;
        }, 3000)}
        <Redirect to='/' />
      </h1>
    </div>
  );
};
export default ReLogin;
