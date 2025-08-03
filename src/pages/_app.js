// src/pages/_app.js
import '../app/globals.css'; // Your global styles
import { ThemeProvider } from '../context/ThemeContext'; // Adjust path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;