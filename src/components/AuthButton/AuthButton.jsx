import React from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../services/user';
import { useUser } from '../../context/UserContext';

export default function AuthButton() {
  const { user, setUser } = useUser();
  return (
    <div>
      {user?.email ? (
        <button
          onClick={async () => {
            await signOutUser();
            setUser({});
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      )}
    </div>
  );
}
