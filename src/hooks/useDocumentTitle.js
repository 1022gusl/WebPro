const TITLE_MAP = {
  '/': '랜딩',
  '/home': '메인 | 박연학 포트폴리오',
  '/license': '자격증',
  '/project': '프로젝트',
  '/co': '경력',
};

export function useDocumentTitle(location) {
  const base = '박연학의 포트폴리오';
  const path = location.pathname.split('/').slice(0, 2).join('/') || '/';
  const title = TITLE_MAP[path] ? `${TITLE_MAP[path]} | ${base}` : base;
  document.title = title;
}
