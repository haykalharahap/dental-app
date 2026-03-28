import { useNavigate } from 'react-router-dom';

export default function AppointmentCard({ appointment, onCancel }) {
  const navigate = useNavigate();
  const appt = appointment;
  const dateObj = new Date(appt.date + 'T00:00:00');
  const dateStr = dateObj.toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
  });
  const statusClass = `status-badge--${appt.status}`;

  return (
    <div className="appointment-card">
      <div className="appointment-card__header">
        <div className="appointment-card__doctor">
          <div className="appointment-card__avatar">{appt.dentistAvatar}</div>
          <div>
            <div className="appointment-card__name">{appt.dentistName}</div>
            <div className="appointment-card__specialty">{appt.specialty}</div>
          </div>
        </div>
        <span className={`status-badge ${statusClass}`}>{appt.status}</span>
      </div>
      <div className="appointment-card__details">
        <div className="appointment-card__detail">
          <span className="appointment-card__detail-icon">📅</span>
          {dateStr}
        </div>
        <div className="appointment-card__detail">
          <span className="appointment-card__detail-icon">🕐</span>
          {appt.time}
        </div>
      </div>
      {appt.status === 'upcoming' && (
        <div className="appointment-card__actions">
          <button className="btn btn--danger btn--sm" onClick={() => onCancel(appt.id)}>Cancel</button>
          <button className="btn btn--ghost btn--sm" onClick={() => navigate(`/profile/${appt.dentistId}`)}>View Doctor</button>
        </div>
      )}
    </div>
  );
}
