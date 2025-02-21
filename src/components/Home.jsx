import React from 'react';
    import theme from '../theme';

    function Home() {
      return (
        <div className="container" style={{ color: theme.palette.text.primary }}>
          <h1 style={theme.typography.h1}>Welcome to Your Sexual Health Tracker</h1>
          <p style={theme.typography.body1}>This app is designed to help you track and understand your sexual activity in a safe and private environment.</p>
          <p style={{ ...theme.typography.body1, color: theme.palette.primary.main }}>Your privacy is our top priority. All data is stored locally and is not transmitted to any external servers.</p>
          <h2 style={theme.typography.h2}>Key Features:</h2>
          <ul style={theme.typography.body1}>
            <li>Log and track your sexual encounters.</li>
            <li>View your activity history on a calendar.</li>
            <li>Gain insights into your sexual health patterns.</li>
            <li>Access helpful resources.</li>
          </ul>
        </div>
      );
    }

    export default Home;
