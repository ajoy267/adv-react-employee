import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <header>
      <Link to="/">
        <h2>ACME Employee Directory</h2>
      </Link>
      <p>{user?.email ? 'Signed in' : 'Not Signed In'}</p>
      <Link to="/login">
        <button>Sign In</button>
      </Link>
    </header>
  );
}
