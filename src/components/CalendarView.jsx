import React, { useState, useEffect } from 'react';
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';
    import './CalendarView.css';
    import theme from '../theme';
    import { Tooltip } from 'react-tippy';
    import 'tippy.js/dist/tippy.css';
    import 'tippy.js/themes/light.css';

    function CalendarView() {
      const [activityLogs, setActivityLogs] = useState([]);

      useEffect(() => {
        const logs = JSON.parse(localStorage.getItem('activityLogs') || '[]');
        setActivityLogs(logs);
      }, []);

      const formatLogMessage = (logs) => {
        if (!logs || logs.length === 0) {
          return 'No activity logged.';
        }

        let message = '';
        logs.forEach((log, index) => {
          message += `Entry ${index + 1}:\n`;
          message += `Partner: ${log.partner || 'N/A'}\n`;
          message += `Protection: ${log.protection || 'N/A'}\n`;
          message += `Notes: ${log.notes || 'N/A'}\n\n`;
        });
        return message;
      };

      // Helper function for consistent date comparison
      const areDatesEqual = (date1, date2) => {
        return (
          date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate()
        );
      };

      const tileContent = ({ date, view }) => {
        if (view === 'month') {
          const hasActivity = activityLogs.some(log => {
            // Convert the log's date string to a Date object
            const logDate = new Date(log.date);
            return areDatesEqual(logDate, date);
          });

          const tileClassName = hasActivity ? 'has-activity' : '';

          return (
            <Tooltip
              title={formatLogMessage(activityLogs.filter(log => areDatesEqual(new Date(log.date), date)))}
              position="top"
              trigger="mouseenter"
              theme="light"
              arrow={true}
              disabled={!hasActivity}
              animation="shift-away"
            >
              <div className={tileClassName}></div>
            </Tooltip>
          );
        }
        return null;
      };

      return (
        <div className="container" style={{ color: theme.palette.text.primary }}>
          <h2 style={theme.typography.h2}>Calendar View</h2>
          <Calendar
            tileContent={tileContent}
            className="custom-calendar"
          />
          <p style={theme.typography.body1}>Hover over dates with logged activity to see details.</p>
        </div>
      );
    }

    export default CalendarView;
