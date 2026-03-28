import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppointments, cancelAppointment, setAppointments } from '../data/storage';
import { useApp } from '../context/AppContext';
import AppointmentCard from '../components/AppointmentCard';
import EmptyState from '../components/EmptyState';

const FILTERS = ['upcoming', 'completed', 'cancelled', 'all'];

const emptyMessages = {
  upcoming: { icon: '📅', title: 'No upcoming appointments', text: 'Book your next dental visit today!' },
  completed: { icon: '✅', title: 'No completed visits yet', text: 'Your completed appointments will appear here.' },
  cancelled: { icon: '❌', title: 'No cancelled appointments', text: 'Great — no cancellations!' },
  all: { icon: '📋', title: 'No appointments yet', text: 'Start by booking your first dental appointment!' },
};

export default function HistoryPage() {
  const [filter, setFilter] = useState('upcoming');
  const [appointments, setAppointmentsState] = useState([]);
  const { showModal, hideModal, showToast } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    loadAppointments();
  }, []);

  function loadAppointments() {
    const appts = getAppointments();
    // Auto-complete past appointments
    const now = new Date();
    let changed = false;
    appts.forEach((a) => {
      if (a.status === 'upcoming') {
        const apptDate = new Date(a.date + 'T' + a.time);
        if (apptDate < now) {
          a.status = 'completed';
          changed = true;
        }
      }
    });
    if (changed) setAppointments(appts);
    setAppointmentsState(appts);
  }

  let filtered = appointments;
  if (filter !== 'all') {
    filtered = appointments.filter((a) => a.status === filter);
  }
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  function handleCancel(id) {
    showModal(
      <div>
        <div className="modal__icon">⚠️</div>
        <h3 className="modal__title">Cancel Appointment?</h3>
        <p className="modal__text">Are you sure you want to cancel this appointment? This action cannot be undone.</p>
        <div className="modal__actions">
          <button className="btn btn--ghost btn--block" onClick={() => hideModal()}>Keep</button>
          <button className="btn btn--danger btn--block" onClick={() => {
            cancelAppointment(id);
            hideModal();
            showToast('Appointment cancelled');
            loadAppointments();
          }}>Cancel It</button>
        </div>
      </div>
    );
  }

  const msg = emptyMessages[filter] || emptyMessages.all;

  return (
    <section className="page active" id="page-history">
      <h2 className="section-header__title" style={{ marginBottom: 'var(--space-md)' }}>Visit History</h2>

      <div className="history-tabs" id="historyTabs">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-tab ${f === filter ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="appointment-list" id="appointmentList">
        {filtered.length === 0 ? (
          <EmptyState icon={msg.icon} title={msg.title} text={msg.text}>
            <button className="btn btn--primary" onClick={() => navigate('/dentists')}>Find a Dentist</button>
          </EmptyState>
        ) : (
          filtered.map((appt) => (
            <AppointmentCard key={appt.id} appointment={appt} onCancel={handleCancel} />
          ))
        )}
      </div>
    </section>
  );
}
