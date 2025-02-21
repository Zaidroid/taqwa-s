// src/theme.js
    const theme = {
      palette: {
        primary: {
          main: '#ff69b4', // Hot Pink
          light: '#ff99c8',
          dark: '#c63f85',
          contrastText: '#121212', // Dark Grey
        },
        secondary: {
          main: '#ff7f50', // Coral
          light: '#ffa77f',
          dark: '#c85a2b',
          contrastText: '#ffffff', // White
        },
        background: {
          default: '#121212', // Dark Grey
          paper: '#1e1e1e', // Slightly lighter grey
        },
        text: {
          primary: '#ffffff', // White
          secondary: '#aaaaaa', // Light Grey
        },
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontSize: '2.5rem',
          fontWeight: 500,
          lineHeight: 1.2,
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 500,
          lineHeight: 1.2,
        },
        h3: {
          fontSize: '1.75rem',
          fontWeight: 500,
          lineHeight: 1.2,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: 1.5,
        },
        button: {
          fontSize: '0.875rem',
          fontWeight: 500,
          textTransform: 'uppercase',
        },
      },
      spacing: (factor) => `${0.5 * factor}rem`, // 8px base spacing
    };

    export default theme;
