import { render, screen } from '@testing-library/react';
import { ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';

test.skip('checking if stuff renders on homepage', async () => {
  render(
    <UserProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </UserProvider>
  );

  const link = await screen.findByRole('link', {
    name: /acme employee directory/i,
  });
  within(link).getByRole('heading', { name: /acme employee directory/i });

  const isSingedIn = screen.getByText(/not signed in/i);
  const signInBtn = screen.getByRole('button', { name: /sign in/i });
  const heading = screen.getByRole('heading', {
    name: /welcome to the acme employee directory/i,
  });
  const intro = screen.getByText(
    /as an employee of acme, you are entitled to a lot of benefits that can be accessed through our site\. you will need to create an account, log in, and create a profile to view these benefits\./i
  );
  const createAccount = screen.getByRole('link', { name: /create account/i });

  expect(link).toBeInTheDocument();
  expect(isSingedIn).toBeInTheDocument();
  expect(signInBtn).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(intro).toBeInTheDocument();
  expect(createAccount).toBeInTheDocument();
});
