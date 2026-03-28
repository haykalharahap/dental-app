import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../data/storage';
import EmptyState from '../components/EmptyState';

export default function RemindersPage() {
  const navigate = useNavigate();
  const appointments = getAppointments().filter((a) => a.status === 'upcoming');
  appointments.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section className="page active" id="page-reminders">
      <h2 className="section-header__title" style={{ marginBottom: 'var(--space-md)' }}>Upcoming Reminders</h2>

      <div id="remindersList">
        {appointments.length === 0 ? (
          <EmptyState icon="🔔" title="No upcoming reminders" text="Book an appointment and your reminders will appear here.">
            <button className="btn btn--primary" onClick={() => navigate('/dentists')}>Book Now</button>
          </EmptyState>
        ) : (
          appointments.map((a) => {
            const daysDiff = Math.ceil(
              (new Date(a.date + 'T' + a.time) - new Date()) / (1000 * 60 * 60 * 24)
            );
            const daysText = daysDiff <= 0 ? 'Today' : daysDiff === 1 ? '1 day' : `${daysDiff} days`;
            const dateObj = new Date(a.date + 'T00:00:00');
            const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            return (
              <div key={a.id} className="reminder-card">
                <div className="reminder-card__icon">🔔</div>
                <div className="reminder-card__content">
                  <div className="reminder-card__title">{a.dentistName}</div>
                  <div className="reminder-card__sub">{a.specialty} • {dateStr} at {a.time}</div>
                </div>
                <div className="reminder-card__countdown">
                  <div className={`reminder-card__days ${daysDiff <= 1 ? 'pulse' : ''}`}>{daysText}</div>
                  <div className="reminder-card__days-label">{daysDiff <= 0 ? '' : 'remaining'}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
