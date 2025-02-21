import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
    import Home from './components/Home';
    import LogActivity from './components/LogActivity';
    import CalendarView from './components/CalendarView';
    import Insights from './components/Insights';
    import Resources from './components/Resources';
    import Login from './components/Login';
    import Register from './components/Register';
    import Logout from './components/Logout';
    import AuthHandler from './AuthHandler'; // Import the new component
    import './App.css';
    import HomeIcon from '@mui/icons-material/Home';
    import BookIcon from '@mui/icons-material/Book';
    import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
    import AssessmentIcon from '@mui/icons-material/Assessment';
    import InfoIcon from '@mui/icons-material/Info';
    import LogoutIcon from '@mui/icons-material/Logout';

    function App() {
      const [isLoggedIn, setIsLoggedIn] = useState(null); // Start with null for loading

      useEffect(() => {
        // Check localStorage for loggedIn status only once on mount
        const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
      }, []);

      if (isLoggedIn === null) {
        // Loading state - don't render any routes yet
        return <div>Loading...</div>;
      }

      return (
        <Router>
          <div className="app-container">
            {isLoggedIn && (
              <div style={{ padding: '10px', backgroundColor: '#1e1e1e', color: '#aaaaaa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Welcome, Taqwa and Zaid!</span>
                <NavLink to="/logout" className="nav-item">
                  <LogoutIcon />
                  Logout
                </NavLink>
              </div>
            )}
            <main>
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />

                {/* Protected Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/log" element={<LogActivity />} />
                <Route path="/calendar" element={<CalendarView />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/resources" element={<Resources />} />

                {/* Initial Route Handling - Use AuthHandler */}
                <Route path="*" element={<AuthHandler />} />
              </Routes>
            </main>

            {isLoggedIn && (
              <nav className="bottom-nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                  <HomeIcon />
                  Home
                </NavLink>
                <NavLink to="/log" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                  <BookIcon />
                  Log
                </NavLink>
                <NavLink to="/calendar" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                  <CalendarTodayIcon />
                  Calendar
                </NavLink>
                <NavLink to="/insights" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                  <AssessmentIcon />
                  Insights
                </NavLink>
                <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                  <InfoIcon />
                  Resources
                </NavLink>
              </nav>
            )}
          </div>
        </Router>
      );
    }

    export default App;
