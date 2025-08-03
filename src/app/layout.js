// src/app/layout.js (for App Router)

import './globals.css'; // Your global styles
import { ThemeProvider } from '../context/ThemeContext'; // Adjust path if necessary
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}