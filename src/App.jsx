import { ThemeProvider } from './contexts/ThemeContext';
import AppContent from './AppContent';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
