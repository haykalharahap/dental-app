import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDentistById } from '../data/dentists';
import { saveAppointment } from '../data/storage';
import { useApp } from '../context/AppContext';

export default function ProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showModal, hideModal, showToast } = useApp();
  const dentist = getDentistById(id);

  const [selectedDate, setSelectedDate] = useState(dentist?.availableSlots[0]?.date || null);
  const [selectedTime, setSelectedTime] = useState(null);

  if (!dentist) {
    return (
      <section className="page active">
        <p>Dentist not found.</p>
        <button className="btn btn--primary" onClick={() => navigate('/dentists')}>Back to Dentists</button>
      </section>
    );
  }

  const d = dentist;
  const daySlot = d.availableSlots.find((s) => s.date === selectedDate);
  const timeSlots = daySlot?.times || [];

  function handleBook() {
    if (!selectedDate || !selectedTime) {
      showToast('Please select a date and time first', 'error');
      return;
    }

    const dateObj = new Date(selectedDate + 'T00:00:00');
    const dateStr = dateObj.toLocaleDateString('en-US', {
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    });

    showModal(
      <div>
        <div className="modal__icon">📅</div>
        <h3 className="modal__title">Confirm Appointment</h3>
        <p className="modal__text">Review your booking details below.</p>
        <div className="modal__detail">
          <div className="modal__detail-row">
            <span className="modal__detail-label">Doctor</span>
            <span className="modal__detail-value">{d.name}</span>
          </div>
          <div className="modal__detail-row">
            <span className="modal__detail-label">Specialty</span>
            <span className="modal__detail-value">{d.specialty}</span>
          </div>
          <div className="modal__detail-row">
            <span className="modal__detail-label">Date</span>
            <span className="modal__detail-value">{dateStr}</span>
          </div>
          <div className="modal__detail-row">
            <span className="modal__detail-label">Time</span>
            <span className="modal__detail-value">{selectedTime}</span>
          </div>
        </div>
        <div className="modal__actions">
          <button className="btn btn--ghost btn--block" onClick={() => hideModal()}>Cancel</button>
          <button className="btn btn--primary btn--block" onClick={() => {
            saveAppointment({
              dentistId: d.id,
              dentistName: d.name,
              dentistAvatar: d.avatar,
              specialty: d.specialty,
              date: selectedDate,
              time: selectedTime,
            });
            hideModal();
            showToast('🎉 Appointment booked successfully!');
            setSelectedTime(null);
          }}>Confirm</button>
        </div>
      </div>
    );
  }

  return (
    <section className="page active" id="page-profile">
      <div id="profileContent">
        <button className="profile-back" onClick={() => navigate('/dentists')}>← Back to Dentists</button>

        <div className="profile-header">
          <div className="profile-avatar">{d.avatar}</div>
          <div className="profile-info">
            <h2 className="profile-name">{d.name}</h2>
            <div className="profile-specialty">{d.specialty}</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat__value">⭐ {d.rating}</div>
                <div className="profile-stat__label">{d.reviewsCount} reviews</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat__value">{d.experience}yr</div>
                <div className="profile-stat__label">Experience</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat__value">{d.distance}km</div>
                <div className="profile-stat__label">Away</div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3 className="profile-section__title">📋 About</h3>
          <p className="profile-bio">{d.bio}</p>
          <div className="profile-tags mt-md">
            <span className="profile-tag">🎓 {d.education}</span>
            {d.languages.map((l) => <span key={l} className="profile-tag">🗣 {l}</span>)}
          </div>
        </div>

        <div className="profile-section">
          <h3 className="profile-section__title">📅 Available Slots</h3>
          <div className="booking-dates" id="bookingDates">
            {d.availableSlots.map((slot) => {
              const dateObj = new Date(slot.date + 'T00:00:00');
              const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
              const dateNum = dateObj.getDate();
              const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
              return (
                <button
                  key={slot.date}
                  className={`date-chip ${slot.date === selectedDate ? 'active' : ''}`}
                  onClick={() => { setSelectedDate(slot.date); setSelectedTime(null); }}
                >
                  <span className="date-chip__day">{dayName}</span>
                  <span className="date-chip__date">{dateNum}</span>
                  <span className="date-chip__month">{month}</span>
                </button>
              );
            })}
          </div>
          <div className="time-grid" id="timeGrid">
            {timeSlots.length === 0 ? (
              <p className="text-muted mt-md">No available slots for this date.</p>
            ) : (
              timeSlots.map((t) => (
                <button
                  key={t}
                  className={`time-slot ${t === selectedTime ? 'active' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))
            )}
          </div>
          <button className="btn btn--primary btn--block btn--lg mt-lg" onClick={handleBook}>Book Appointment</button>
        </div>

        <div className="profile-section">
          <h3 className="profile-section__title">💬 Patient Reviews</h3>
          {d.reviews.map((review, i) => {
            const stars = '⭐'.repeat(review.rating);
            return (
              <div key={i} className="review-card">
                <div className="review-card__header">
                  <span className="review-card__author">{review.author}</span>
                  <span className="review-card__date">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="review-card__stars">{stars}</div>
                <p className="review-card__text">{review.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
