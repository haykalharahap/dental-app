export default function SearchBar({ value, onChange, placeholder, showButton, onSearch }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon">🔍</span>
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder || 'Search…'}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && onSearch) onSearch(); }}
      />
      {showButton && (
        <button className="search-bar__btn" onClick={onSearch}>Search</button>
      )}
    </div>
  );
}
