import { getDentists } from '../data/dentists';
import DentistCard from '../components/DentistCard';

export default function DentistsPage() {
  const list = getDentists();

  return (
    <section className="page active" id="page-dentists">
      <h2 className="section-header__title" style={{ marginBottom: 'var(--space-md)' }}>Dokter Kami</h2>
      <div className="dentist-grid" id="dentistList">
        {list.map((d) => <DentistCard key={d.id} dentist={d} />)}
      </div>
    </section>
  );
}
