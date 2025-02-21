import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import theme from '../theme';

    function Login() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve user credentials from localStorage
        const storedCredentials = JSON.parse(localStorage.getItem('users') || '{}');

        // Check if the entered credentials match the stored ones
        if (storedCredentials[username] === password) {
          // Set loggedIn flag and username in localStorage
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('username', username);

          // Redirect to the home page
          navigate('/');
        } else {
          setError('Invalid username or password.');
        }

        // Clear the form
        setUsername('');
        setPassword('');
      };

      const handleGuestLogin = () => {
        // Set loggedIn flag and username to "Guest" in localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', 'Guest');

        // Redirect to the home page
        navigate('/');
      };

      return (
        <div className="container" style={{ color: theme.palette.text.primary }}>
          <h1 style={theme.typography.h1}>Login</h1>

          {/* Guest Login Section */}
          <div style={{ marginBottom: theme.spacing(4) }}>
            <h2 style={theme.typography.h2}>Continue as Guest</h2>
            <p style={theme.typography.body1}>
              Access the app without creating an account.  Your data will be stored locally for this session only.
            </p>
            <button
              onClick={handleGuestLogin}
              style={{
                ...theme.typography.button,
                padding: theme.spacing(2),
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Login as Guest
            </button>
          </div>

          {/* Registered User Login Section */}
          <div>
            <h2 style={theme.typography.h2}>Login with Account</h2>
            {error && <p style={{ ...theme.typography.body1, color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2) }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="username" style={{ marginBottom: theme.spacing(1) }}>Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    ...theme.typography.body1,
                    padding: theme.spacing(1.5),
                    borderRadius: '4px',
                    border: `1px solid ${theme.palette.text.secondary}`,
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="password" style={{ marginBottom: theme.spacing(1) }}>Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    ...theme.typography.body1,
                    padding: theme.spacing(1.5),
                    borderRadius: '4px',
                    border: `1px solid ${theme.palette.text.secondary}`,
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  ...theme.typography.button,
                  padding: theme.spacing(2),
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default Login;
