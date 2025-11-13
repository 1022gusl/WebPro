export default function TagChips({
  items = [],
  mode = 'multi',
  selected = [],
  value = '',
  onChange,
  showClear = true,
  className = '',
}) {
  const normalize = (it) =>
    typeof it === 'string' ? { key: it, label: it } : it;

  const handleClick = (k) => {
    if (mode === 'multi') {
      const next = selected.includes(k)
        ? selected.filter((t) => t !== k)
        : [...selected, k];
      onChange?.(next);
    } else {
      const next = value === k ? '' : k;
      onChange?.(next);
    }
  };

  const hasSelection = mode === 'multi' ? selected.length > 0 : Boolean(value);

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((raw) => {
        const { key, label } = normalize(raw);
        const on = mode === 'multi' ? selected.includes(key) : value === key;

        return (
          <button
            key={key}
            type="button"
            onClick={() => handleClick(key)}
            className={`text-xs px-3 py-1 rounded-full border transition ${
              on
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white hover:bg-gray-50'
            }`}
            aria-pressed={on}
          >
            {label}
          </button>
        );
      })}

      {showClear && mode === 'multi' && hasSelection && (
        <button
          type="button"
          onClick={() => onChange?.([])}
          className="text-xs px-3 py-1 rounded-full border bg-white hover:bg-gray-50"
          title="필터 초기화"
        >
          초기화
        </button>
      )}
    </div>
  );
}
