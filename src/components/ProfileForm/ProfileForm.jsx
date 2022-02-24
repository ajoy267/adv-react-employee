import React from 'react';
import { useUser } from '../../context/UserContext';

export default function ProfileForm() {
  const { user } = useUser();
  return (
    <div>
      <form>
        <section>
          <label>
            Name:
            <input id="name" type="text" name="name" />
          </label>
        </section>
        <section>
          <label>
            Email:
            <input
              id="email"
              type="email"
              name="email"
              disabled={true}
              placeholder={user.email}
            />
          </label>
        </section>
        <section>
          <label>
            Birthday:
            <input id="birthday" type="date" name="birthday" />
          </label>
        </section>
        <section>
          <label>
            Bio:
            <textarea id="bio" name="bio" />
          </label>
        </section>
      </form>
    </div>
  );
}
