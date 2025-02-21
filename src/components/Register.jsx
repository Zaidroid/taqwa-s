import React, { useState } from 'react';
    import theme from '../theme';

    function Register() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (password !== confirmPassword) {
          alert("Passwords don't match!");
          return;
        }
        console.log({ username, password });
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      };

      return (
        <div className="container" style={{ color: theme.palette.text.primary }}>
          <h1 style={theme.typography.h1}>Register</h1>
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

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="confirm-password" style={{ marginBottom: theme.spacing(1) }}>Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </button>
          </form>
        </div>
      );
    }

    export default Register;
