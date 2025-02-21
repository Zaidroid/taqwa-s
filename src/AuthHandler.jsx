import React, { useState, useEffect } from 'react';
    import { Navigate } from 'react-router-dom';

    function AuthHandler() {
      const [isLoggedIn, setIsLoggedIn] = useState(null);

      useEffect(() => {
        const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
      }, []);

      if (isLoggedIn === null) {
        return <div>Loading...</div>; // Or a more elaborate loading spinner
      }

      return isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/login" replace />;
    }

    export default AuthHandler;
