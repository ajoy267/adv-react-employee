import { createContext, useContext, useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const resp = await getProfile();
        if (resp.length > 0) {
          setProfile(resp[0]);
        }
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      }
    };
    fetchProfile();
    setLoading(false);
  }, [user]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, loading }}>
      {children}
    </ProfileContext.Provider>
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
