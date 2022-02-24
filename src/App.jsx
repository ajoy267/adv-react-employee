import './App.css';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}
