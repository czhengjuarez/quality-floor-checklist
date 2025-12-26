import { ThemeProvider } from './contexts/ThemeContext';
import AppContent from './AppContent_R2';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
