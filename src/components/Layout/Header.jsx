import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <header>
      <h2>ACME Employee Directory</h2>
      <p>{user?.email ? 'Signed in' : 'Not Signed In'}</p>
      <button>Sign In</button>
    </header>
  );
}
