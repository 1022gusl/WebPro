import { CAREERS } from '../constant/carrers';

export default function Career() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold">경력</h2>
        <p className="text-gray-600 text-sm">아르바이트 내역입니다.</p>
      </header>

      <div className="bg-white border rounded-2xl p-6">
        <ul className="relative pl-6">
          {CAREERS.map((c) => (
            <li key={c.id} className="relative pb-6 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <div className="text-sm text-gray-600">{c.org}</div>
                </div>
                <div className="text-sm text-gray-500 shrink-0">{c.period}</div>
              </div>

              {c.notes && (
                <p className="mt-2 text-sm text-gray-700">{c.notes}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
