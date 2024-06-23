import Home from './Screens/Home';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}