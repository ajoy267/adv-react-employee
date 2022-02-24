import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import AuthButton from '../AuthButton/AuthButton';

export default function Header() {
  const { user } = useUser();
  console.log('user', user);
  return (
    <header>
      <Link to="/">
        <h2>ACME Employee Directory</h2>
      </Link>
      <p>{user?.email ? `Signed in as ${user.email}` : 'Not Signed In'}</p>
      <AuthButton />
    </header>
  );
}
