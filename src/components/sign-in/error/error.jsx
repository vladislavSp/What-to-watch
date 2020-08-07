import React from 'react';

export const ErrorLogin = () => (<div className="sign-in__message">
  <p>Please enter a valid email address</p>
</div>);

export const ErrorPass = () => (<div className="sign-in__message">
  <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
</div>);
