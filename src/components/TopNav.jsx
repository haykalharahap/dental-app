import { useTheme } from '../context/ThemeContext';

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="top-nav" id="topNav">
      <div className="top-nav__logo">
        <img src="/logo.svg" alt="Dentoms Dental Care" className="top-nav__logo-img" />
      </div>
      <div className="top-nav__actions">
        <button className="icon-btn" id="themeToggle" title="Toggle theme" aria-label="Toggle dark/light mode" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
