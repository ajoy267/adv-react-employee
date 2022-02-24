import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function SignInForm({ onSubmit, label = 'Authenticate' }) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      if (!email || password.length < 5)
        throw new Error(
          'an email and password (with 5+ characters) are required.'
        );
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <legend>{label}</legend>
      <section>
        <label>
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
          />
        </label>
      </section>
      <section>
        <label>
          Password
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
        </label>
      </section>
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : label}
      </button>
      {formError && <p>{formError}</p>}
    </form>
  );
}
