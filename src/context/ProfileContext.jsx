import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  const value = useMemo(() => {
    profile, setProfile;
  }, [profile]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await getProfile();
        setProfile(resp);
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      }
    };
    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be inside ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };
