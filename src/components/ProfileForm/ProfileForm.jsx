import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { useProfile } from '../../context/ProfileContext';

export default function ProfileForm(onSubmit) {
  const { user } = useUser();
  const { profile } = useProfile();
  const { formState, handleFormChange, setFormError, formError } = useForm(
    profile
      ? {
          name: profile.name,
          email: profile.email,
          birthday: profile.birthday,
          bio: profile.bio,
        }
      : {
          name: '',
          email: user.email,
          birthday: '',
          bio: '',
        }
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, birthday, bio } = formState;
    try {
      await onSubmit({ name, email, birthday, bio });
    } catch (e) {
      setFormError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <form onSubmit={handleSubmit}>
          <section>
            <label>Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleFormChange}
            />
          </section>
          <section>
            <label>Email: </label>
            <input
              id="email"
              type="email"
              name="email"
              disabled={true}
              placeholder={user.email}
              value={formState.email}
              onChange={handleFormChange}
            />
          </section>
          <section>
            <label>Birthday: </label>
            <input
              id="birthday"
              type="date"
              name="birthday"
              value={formState.birthday}
              onChange={handleFormChange}
            />
          </section>
          <section>
            <label>Bio: </label>
            <textarea
              id="bio"
              name="bio"
              value={formState.bio}
              onChange={handleFormChange}
            />
          </section>
          <button type="submit">Submit</button>
          {formError && <p>{formError}</p>}
        </form>
      )}
    </div>
  );
}