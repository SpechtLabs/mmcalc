import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTheme } from '../hooks/useTheme';

export function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}
