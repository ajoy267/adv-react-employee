import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const history = useHistory();
  const { profile, loading } = useProfile();
  const userProfile = (
    <section>
      <p>Name: {profile.name}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </section>
  );

  const handleProfile = async () => {
    history.push('/profile/edit');
  };
  console.log(profile);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && profile.name ? (
        userProfile
      ) : (
        <Redirect to="/profile/create" />
      )}
      <button onClick={handleProfile}>Edit Profile</button>
    </div>
  );
}
