import { AuthProvider, useAuth } from '@propelauth/react';
import MainPage from './MainPage';

const App = () => {
  return (
    <AuthProvider authUrl={process.env.REACT_APP_PROPEL_AUTH_URL}>
      <div className="App">
        <ProtectedComponent />
      </div>
    </AuthProvider>
  );
};

const ProtectedComponent = () => {
  const { isAuthenticated, user } = useAuth();

  return isAuthenticated ? (
    <div>Hello, {user.email}</div>
  ) : (
    <div>Please log in</div>
  );
};

export default App;
