import React, { useState, useEffect } from 'react';
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';
    import './CalendarView.css';
    import theme from '../theme';

    function CalendarView() {
      const [activityLogs, setActivityLogs] = useState([]);

      useEffect(() => {
        // Load logs from local storage
        const logs = JSON.parse(localStorage.getItem('activityLogs') || '[]');
        setActivityLogs(logs);
      }, []);

      const tileContent = ({ date, view }) => {
        if (view === 'month') {
          const dateString = date.toISOString().split('T')[0];
          const hasActivity = activityLogs.some(log => log.date === dateString);
          return hasActivity ? <div className="activity-marker"></div> : null;
        }
        return null;
      };

      return (
        <div className="container" style={{color: theme.palette.text.primary}}>
          <h2 style={theme.typography.h2}>Calendar View</h2>
          <Calendar
            tileContent={tileContent}
            className="custom-calendar"
          />
          <p style={theme.typography.body1}>Dates with logged activity are marked.</p>
        </div>
      );
    }

    export default CalendarView;
