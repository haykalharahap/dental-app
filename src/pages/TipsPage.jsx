import { useState } from 'react';
import { getHealthTips } from '../data/healthTips';
import TipCard from '../components/TipCard';
import FilterTabs from '../components/FilterTabs';

const CATEGORIES = ['All', 'Hygiene', 'Nutrition', 'Prevention', 'Lifestyle'];

export default function TipsPage() {
  const [category, setCategory] = useState('All');
  const tips = getHealthTips(category);

  return (
    <section className="page active" id="page-tips">
      <h2 className="section-header__title" style={{ marginBottom: 'var(--space-md)' }}>Health Tips & Advice</h2>

      <FilterTabs items={CATEGORIES} active={category} onSelect={setCategory} />

      <div className="tips-grid" id="tipsGrid">
        {tips.map((tip) => <TipCard key={tip.id} tip={tip} />)}
      </div>
    </section>
  );
}
