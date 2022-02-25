import React from 'react';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

export default function ProfileForm(onSubmit) {
  const { user } = useUser();
  const { formState, handleFormChange, setFormError, formError } = useForm({
    name: '',
    email: user.email,
    birthday: '',
    bio: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, birthday, bio } = formState;
    try {
      await onSubmit({ name, email, birthday, bio });
    } catch (e) {
      setFormError(e.message);
    }
  };

  return (
    <div>
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
      </form>
    </div>
  );
}
