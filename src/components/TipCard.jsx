export default function TipCard({ tip }) {
  return (
    <div className="tip-card">
      <div className="tip-card__icon">{tip.icon}</div>
      <div className="tip-card__category">{tip.category}</div>
      <h3 className="tip-card__title">{tip.title}</h3>
      <p className="tip-card__text">{tip.summary}</p>
    </div>
  );
}
