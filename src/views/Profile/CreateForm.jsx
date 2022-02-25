import React from 'react';
import { useProfile } from '../../context/ProfileContext';
import { useHistory, Redirect } from 'react-router-dom';
import { createProfile, updateProfile } from '../../services/profiles';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useUser } from '../../context/UserContext';

export default function CreateForm({ makingProfile = false }) {
  const { setProfile } = useProfile();
  const { user } = useUser();
  const history = useHistory();

  const handleProfileForm = async ({ name, birthday, bio }) => {
    try {
      if (makingProfile) {
        await createProfile({ name, email: user.email, birthday, bio });
        <Redirect to="/profile" />;
      } else {
        const response = await updateProfile({
          name,
          email: user.email,
          birthday,
          bio,
        });
        setProfile({
          name: response.name,
          email: user.email,
          birthday: response.birthday,
          bio: response.bio,
        });
        history.push('profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      {makingProfile ? 'Create Your Own Profile' : 'Edit Your Profile'}
      <ProfileForm onSubmit={handleProfileForm} makingProfile={makingProfile} />
    </div>
  );
}
