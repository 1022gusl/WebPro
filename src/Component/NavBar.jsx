import { NavLink } from 'react-router-dom';

export const navItems = [
  { to: '/home', label: '메인' },
  { to: '/project', label: '프로젝트' },
  { to: '/License', label: '자격증' },
  { to: '/career', label: '경력' },
];

export default function NavBar({ items = navItems }) {
  return (
    <nav className="bg-blue-100 text-black">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-center gap-8 py-3 text-lg font-medium">
          {items.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/home'}
                className={({ isActive }) =>
                  [
                    'px-2 py-1 transition border-b-2',
                    isActive
                      ? 'text-blue-700 font-semibold border-blue-700'
                      : 'border-transparent hover:text-blue-500 hover:border-blue-400',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
