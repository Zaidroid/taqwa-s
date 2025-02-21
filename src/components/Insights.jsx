import React from 'react';
    import theme from '../theme';

    function Insights() {
      return (
        <div className="container" style={{ color: theme.palette.text.primary }}>
          <h1 style={theme.typography.h1}>Insights</h1>
          <p style={theme.typography.body1}>This section will display personalized insights based on your logged activity. (Coming soon!)</p>
        </div>
      );
    }

    export default Insights;
