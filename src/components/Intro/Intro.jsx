import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <main>
      <h1>Welcome to the Acme Employee Directory</h1>
      <p>
        As an employee of Acme, you are entitled to a lot of benefits that can
        be accessed through our site. You will need to create an account, log
        in, and create a profile to view these benefits.
      </p>
      <p>
        <Link to="/register">Create Account</Link> or{' '}
        <Link to="/login">Sign In</Link>
      </p>
    </main>
  );
}
