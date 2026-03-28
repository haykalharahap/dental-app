export default function FilterTabs({ items, active, onSelect }) {
  return (
    <div className="filter-tabs mb-md">
      {items.map((item) => (
        <button
          key={item}
          className={`filter-tab ${item === active ? 'active' : ''}`}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
