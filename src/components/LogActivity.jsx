import React, { useState } from 'react';
    import theme from '../theme';

    function LogActivity() {
      const [date, setDate] = useState('');
      const [partner, setPartner] = useState('');
      const [protection, setProtection] = useState('');
      const [notes, setNotes] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd save this data to local storage or a database.
        console.log({ date, partner, protection, notes });
        // Reset form
        setDate('');
        setPartner('');
        setProtection('');
        setNotes('');
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

            {/* Protection Input */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="protection" style={{ marginBottom: theme.spacing(1) }}>Protection Used</label>
              <input
                type="text"
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
              />
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
