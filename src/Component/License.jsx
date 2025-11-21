import { useMemo, useState } from 'react';
import Tag from './Tag';
import { LICENSES } from '../constant/license';

const STATUS_TABS = [
  { key: 'all', label: '전체' },
  { key: 'obtained', label: '취득' },
  { key: 'preparing', label: '준비중' },
  { key: 'expired', label: '만료' },
];

const statusStyle = {
  obtained: 'bg-green-50 text-green-700 border-green-200',
  preparing: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  expired: 'bg-red-50 text-red-700 border-red-200',
};

export default function License() {
  const [tab, setTab] = useState('all');
  const [sortKey, setSortKey] = useState('acquiredAt');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let arr = [...LICENSES];

    if (tab !== 'all') {
      arr = arr.filter((l) => l.status === tab);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          (l.issuer || '').toLowerCase().includes(q) ||
          (l.level || '').toLowerCase().includes(q)
      );
    }

    arr.sort((a, b) => {
      if (sortKey === 'acquiredAt') {
        const da = a.acquiredAt ? new Date(a.acquiredAt).getTime() : -Infinity;
        const db = b.acquiredAt ? new Date(b.acquiredAt).getTime() : -Infinity;
        return db - da;
      }
      return a.name.localeCompare(b.name, 'ko');
    });

    return arr;
  }, [tab, sortKey, query]);

  return (
    <section className="space-y-6">
      <header className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">자격증</h2>
          <p className="text-gray-600 text-sm">
            상태·정렬·검색으로 빠르게 확인하세요.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="검색: 자격명/기관/급수"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-md px-3 py-1 w-64"
            aria-label="자격증 검색"
          />
          <label className="text-sm text-gray-600">정렬</label>
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="border rounded-md px-2 py-1"
            aria-label="정렬 기준 선택"
          >
            <option value="acquiredAt">취득일(최신순)</option>
            <option value="name">이름(가나다)</option>
          </select>
        </div>
      </header>

      <Tag
        items={STATUS_TABS}
        mode="single"
        value={tab}
        onChange={(next) => setTab(next || 'all')}
        showClear={false}
      />

      <ul className="grid grid-cols-3 gap-6">
        {filtered.map((l) => (
          <li
            key={l.id}
            className="border rounded-2xl p-5 bg-white hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-lg">
                  {l.name}{' '}
                  {l.level && (
                    <span className="text-gray-500 text-base">({l.level})</span>
                  )}
                </h3>
                <div className="text-sm text-gray-600">{l.issuer}</div>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border ${
                  statusStyle[l.status] ||
                  'bg-slate-50 text-slate-700 border-slate-200'
                }`}
                title={`상태: ${l.status}`}
              >
                {labelOfStatus(l.status)}
              </span>
            </div>

            <div className="mt-3 text-sm text-gray-700 space-y-1">
              {l.acquiredAt && (
                <div>
                  <span className="text-gray-500">취득일</span>
                  <span>
                    {' '}
                    {new Date(l.acquiredAt).toLocaleDateString('ko-KR')}
                  </span>
                </div>
              )}
              {l.score && (
                <div>
                  <span className="text-gray-500">점수/결과</span>
                  <span>{l.score}</span>
                </div>
              )}
              {l.notes && <div className="text-gray-600">{l.notes}</div>}
            </div>
          </li>
        ))}
      </ul>

      {/* 필터에 걸러지면 보여줄 텍스트 */}
      {filtered.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          조건에 맞는 자격증이 없습니다. 탭/검색을 조정해 보세요.
        </div>
      )}
    </section>
  );
}

function labelOfStatus(s) {
  switch (s) {
    case 'obtained':
      return '취득';
    case 'preparing':
      return '준비중';
    case 'expired':
      return '만료';
    case 'planned':
      return '계획';
    default:
      return '기타';
  }
}
