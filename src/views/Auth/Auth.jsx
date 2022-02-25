import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignInForm';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/user';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const loggedIn = await signInUser(email, password);
        setUser({ id: loggedIn.id, email: loggedIn.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <section>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome Back!'}</h2>
      <br />
      <SignInForm
        onSubmit={handleAuth}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />
      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      )}
    </section>
  );
}
