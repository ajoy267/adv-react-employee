import './App.css';
import Profile from './views/Profile/Profile';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Layout/Header';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ProfileProvider } from './context/ProfileContext';
import ProfileForm from './components/ProfileForm/ProfileForm';

export default function App() {
  return (
    <main>
      <UserProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/register">
              <Auth isSigningUp />
            </Route>
            <Route path="/confirm-email">
              <ConfirmEmail />
            </Route>
            <ProfileProvider>
              <PrivateRoute path="/profile">
                <Profile />
              </PrivateRoute>
              <PrivateRoute path="/profile/edit">
                <ProfileForm />
              </PrivateRoute>
              <PrivateRoute path="/profile/create">
                <ProfileForm makingProfile />
              </PrivateRoute>
            </ProfileProvider>
          </Switch>
        </Router>
      </UserProvider>
    </main>
  );
}
