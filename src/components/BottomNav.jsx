import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/dentists', icon: '🦷', label: 'Dentists' },
  { to: '/history', icon: '📋', label: 'History' },
  { to: '/tips', icon: '💡', label: 'Tips' },
  { to: '/reminders', icon: '🔔', label: 'Reminders' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" id="bottomNav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `bottom-nav__item ${isActive ? 'active' : ''}`}
          end={item.to === '/'}
        >
          <span className="bottom-nav__item-icon">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
