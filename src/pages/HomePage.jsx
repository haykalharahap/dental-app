import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDentists } from '../data/dentists';
import { getHealthTips } from '../data/healthTips';
import DentistCard from '../components/DentistCard';
import TipCard from '../components/TipCard';

export default function HomePage() {
  const navigate = useNavigate();
  const doctor = getDentists()[0];
  const tips = getHealthTips().slice(0, 3);

  return (
    <section className="page active" id="page-home">
      <div className="hero">
        <div className="hero__content">
          <div className="hero__badge">✨ Dentoms Dental Care</div>
          <h1 className="hero__title">Senyum Sehat Dimulai <span className="highlight">Di&nbsp;Sini</span></h1>
          <p className="hero__subtitle">Klinik gigi terpercaya dengan pelayanan terbaik. Booking jadwal periksa gigi Anda sekarang juga.</p>

          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <button className="btn btn--primary btn--lg btn--block" onClick={() => navigate('/profile/1')}>
              📅 Booking Sekarang
            </button>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-card__value">14+</div>
              <div className="stat-card__label">Tahun Pengalaman</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">5K+</div>
              <div className="stat-card__label">Pasien Puas</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">4.9</div>
              <div className="stat-card__label">Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-header__title">Dokter Kami</h2>
      </div>
      <div id="featuredDentists">
        <DentistCard dentist={doctor} />
      </div>

      <div className="section-header">
        <h2 className="section-header__title">Tips Kesehatan Gigi</h2>
        <span className="section-header__link" onClick={() => navigate('/tips')}>Lihat Semua →</span>
      </div>
      <div className="tips-grid" id="homeTips">
        {tips.map((t) => <TipCard key={t.id} tip={t} />)}
      </div>
    </section>
  );
}
