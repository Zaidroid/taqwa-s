import React, { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import theme from '../theme';

    function Logout() {
      const navigate = useNavigate();

      useEffect(() => {
        // Clear login information from localStorage
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');

        // Redirect to the login page
        navigate('/login');
      }, [navigate]);

      return (
        <div className="container" style={{ color: theme.palette.text.primary }}>
          <p style={theme.typography.body1}>Logging out...</p>
        </div>
      );
    }

    export default Logout;
