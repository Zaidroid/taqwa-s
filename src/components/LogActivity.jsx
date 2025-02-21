import React, { useState } from 'react';
    import theme from '../theme';

    function LogActivity() {
      const [date, setDate] = useState('');
      const [partner, setPartner] = useState('');
      const [protection, setProtection] = useState(''); // Initialize as empty string
      const [notes, setNotes] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();

        // Create a log entry object
        const logEntry = {
          date,
          partner,
          protection,
          notes,
        };

        // Get existing logs from localStorage
        const existingLogs = JSON.parse(localStorage.getItem('activityLogs') || '[]');

        // Add the new log entry to the array
        existingLogs.push(logEntry);

        // Save the updated logs back to localStorage
        localStorage.setItem('activityLogs', JSON.stringify(existingLogs));

        // Reset form
        setDate('');
        setPartner('');
        setProtection('');
        setNotes('');
        alert('Activity logged successfully!'); // Provide feedback to the user
      };

      return (
        <div className="container" style={{ color: theme.palette.text.primary }}>
          <h1 style={theme.typography.h1}>Log Activity</h1>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2) }}>
            {/* Date Input */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="date" style={{ marginBottom: theme.spacing(1) }}>Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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

            {/* Partner Input */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="partner" style={{ marginBottom: theme.spacing(1) }}>Partner</label>
              <input
                type="text"
                id="partner"
                value={partner}
                onChange={(e) => setPartner(e.target.value)}
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

            {/* Protection Input - Now a dropdown */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="protection" style={{ marginBottom: theme.spacing(1) }}>Protection Used</label>
              <select
                id="protection"
                value={protection}
                onChange={(e) => setProtection(e.target.value)}
                style={{
                  ...theme.typography.body1,
                  padding: theme.spacing(1.5),
                  borderRadius: '4px',
                  border: `1px solid ${theme.palette.text.secondary}`,
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Notes Input */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="notes" style={{ marginBottom: theme.spacing(1) }}>Notes</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  ...theme.typography.body1,
                  padding: theme.spacing(1.5),
                  borderRadius: '4px',
                  border: `1px solid ${theme.palette.text.secondary}`,
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  resize: 'vertical', // Allow vertical resizing
                }}
              />
            </div>

            {/* Submit Button */}
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
              Log Activity
            </button>
          </form>
        </div>
      );
    }

    export default LogActivity;
