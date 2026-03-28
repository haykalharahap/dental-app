import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Modal from './components/Modal';
import Toast from './components/Toast';
import HomePage from './pages/HomePage';
import DentistsPage from './pages/DentistsPage';
import ProfilePage from './pages/ProfilePage';
import HistoryPage from './pages/HistoryPage';
import TipsPage from './pages/TipsPage';
import RemindersPage from './pages/RemindersPage';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider>
          <TopNav />
          <main className="app">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dentists" element={<DentistsPage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/tips" element={<TipsPage />} />
              <Route path="/reminders" element={<RemindersPage />} />
            </Routes>
          </main>
          <BottomNav />
          <Modal />
          <Toast />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
