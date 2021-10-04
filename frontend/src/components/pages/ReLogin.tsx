import React, { useState } from "react";
import { Redirect } from "react-router";
const ReLogin = () => {
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
