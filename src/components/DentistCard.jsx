import { useNavigate } from 'react-router-dom';

export default function DentistCard({ dentist }) {
  const navigate = useNavigate();
  const d = dentist;

  return (
    <div className="dentist-card" onClick={() => navigate(`/profile/${d.id}`)}>
      <div className="dentist-card__header">
        <div className="dentist-card__avatar">{d.avatar}</div>
        <div className="dentist-card__info">
          <div className="dentist-card__name">{d.name}</div>
          <div className="dentist-card__specialty">{d.specialty}</div>
        </div>
      </div>
      <div className="dentist-card__meta">
        <span className="dentist-card__rating">
          <span className="star">⭐</span> {d.rating}
          <span className="count">({d.reviewsCount})</span>
        </span>
        <span className="dentist-card__distance">📍 {d.distance} km</span>
        <span className="dentist-card__exp">🏥 {d.experience} yr exp</span>
      </div>
      <div className="dentist-card__actions">
        <button className="btn btn--primary btn--sm" onClick={(e) => { e.stopPropagation(); navigate(`/profile/${d.id}`); }}>Book Now</button>
        <button className="btn btn--ghost btn--sm" onClick={(e) => { e.stopPropagation(); navigate(`/profile/${d.id}`); }}>View Profile</button>
      </div>
    </div>
  );
}
