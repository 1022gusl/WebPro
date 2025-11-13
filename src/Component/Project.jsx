import { useMemo, useState } from 'react';
import { PROJECTS } from '../constant/projects';
import Tag from './Tag';

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.stack))).sort();

export default function Project() {
  const [selected, setSelected] = useState([]);
  const [sortKey, setSortKey] = useState('updatedAt');
  const [view, setView] = useState('grid');

  // 필터링과 정렬 부분입니다.
  const filtered = useMemo(() => {
    let arr = [...PROJECTS];
    if (selected.length) {
      arr = arr.filter((p) => selected.every((tag) => p.stack.includes(tag)));
    }
    arr.sort((a, b) => {
      if (sortKey === 'updatedAt')
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      return a.title.localeCompare(b.title, 'ko');
    });
    return arr;
  }, [selected, sortKey]);

  return (
    <section className="space-y-6">
      <header className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold">프로젝트</h2>
          <p className="text-gray-600 text-sm">
            스택 필터와 정렬로 빠르게 살펴보세요.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">정렬</label>
          <select
            className="border rounded-md px-2 py-1"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            aria-label="정렬 기준 선택"
          >
            <option value="updatedAt">최근 업데이트</option>
            <option value="title">제목</option>
          </select>

          <div
            className="ml-2 grid grid-cols-2 rounded-md overflow-hidden border"
            role="tablist"
            aria-label="보기 방식 선택"
          >
            <button
              type="button"
              className={`px-3 py-1 text-sm ${
                view === 'grid' ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
              onClick={() => setView('grid')}
              title="그리드 보기"
              role="tab"
              aria-selected={view === 'grid'}
            >
              Grid
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-sm ${
                view === 'list' ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
              onClick={() => setView('list')}
              title="리스트 보기"
              role="tab"
              aria-selected={view === 'list'}
            >
              List
            </button>
          </div>
        </div>
      </header>

      <Tag
        items={ALL_TAGS}
        mode="multi"
        selected={selected}
        onChange={setSelected}
        showClear={true}
      />

      {/* 그리드로 할 지 리스트로 할 지 */}
      {view === 'grid' ? (
        <ul className="grid grid-cols-3 gap-6">
          {filtered.map((p) => (
            <li
              key={p.id}
              className="group border rounded-2xl p-5 bg-white hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg">{p.title}</h3>
              </div>

              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {p.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 rounded-full border bg-white"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.highlights?.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {p.highlights.slice(0, 2).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex gap-3">
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    className="text-blue-600 text-sm hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo →
                  </a>
                )}
                {p.links.repo && (
                  <a
                    href={p.links.repo}
                    className="text-blue-600 text-sm hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                )}
              </div>

              <div className="mt-3 text-xs text-gray-500">
                Updated: {new Date(p.updatedAt).toLocaleDateString('ko-KR')}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="divide-y rounded-2xl border bg-white">
          {filtered.map((p) => (
            <li key={p.id} className="p-5 hover:bg-gray-50 transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.summary}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-full border bg-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.highlights?.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="text-right">
                  <div className="text-xs text-gray-500">
                    Updated: {new Date(p.updatedAt).toLocaleDateString('ko-KR')}
                  </div>
                  <div className="mt-3 flex gap-2 justify-end">
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        className="text-blue-600 text-sm hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    )}
                    {p.links.repo && (
                      <a
                        href={p.links.repo}
                        className="text-blue-600 text-sm hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* AND 필터에 프로젝트가 다 걸러지면 보여줄 텍스트 */}
      {filtered.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          조건에 맞는 프로젝트가 없습니다. 필터를 조정해 보세요.
        </div>
      )}
    </section>
  );
}
