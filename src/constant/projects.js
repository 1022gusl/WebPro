export const PROJECTS = [
  {
    id: 'cw',
    title: 'Coworkers',
    summary: '그룹 태스크 관리 플랫폼',
    stack: ['Next.js', 'React Query', 'StoryBook', 'TypeScript'],
    updatedAt: '2025-02-24',
    links: {
      repo: 'https://github.com/Team-7-Coworkers/coworkers',
      demo: 'https://coworkers-11-4-7.vercel.app/',
    },
    highlights: [
      'TypeScript 사용으로 일관된 데이터 관리',
      'React Query로 서버 상태 관리/캐싱',
    ],
    description: '팀 태스크 관리용 TodoList 형식 플랫폼',
  },
  {
    id: 'tj',
    title: 'The-Julge',
    summary: '커뮤니티/일자리 추천',
    stack: ['Next.js', 'Zustand', 'Tailwind', 'Vercel'],
    updatedAt: '2024-12-31',
    links: {
      repo: 'https://github.com/Codeit-Sprint-Part-3-Team-2/The-Julge',
      demo: 'https://the-julge-team-2.vercel.app/',
    },
    highlights: [
      'Zustand를 활용한 전역 상태 관리',
      '정렬 및 상세 필터 기반 페이지네이션 기능',
    ],
    description:
      '사장님과 알바님으로 나뉘어 일자리를 모집, 검색, 지원할 수 있는 플랫폼',
  },
  {
    id: 'af',
    title: 'ActivityForecast',
    summary: '날씨 기반 야외활동 추천 웹앱',
    stack: ['React', 'Zustand'],
    updatedAt: '2025-11-12',
    links: {
      repo: 'https://github.com/ActivityForecast/ActivityForecast-Frontend',
      demo: 'https://activityforecast.netlify.app/',
    },
    highlights: [
      '기상 API 연동 및 활동 추천 로직 구현',
      '상태 관리(Zustand)로 UI 상태 단순화',
    ],
    description: '기상 데이터를 바탕으로 활동 추천을 제공하는 웹 플랫폼',
  },
  {
    id: 'fk',
    title: 'Fandom-K',
    summary: '아이돌 후원 플랫폼',
    stack: ['React', 'SCSS'],
    updatedAt: '2024-11-08',
    links: {
      repo: 'https://github.com/part2-1/fandom-k',
      demo: 'https://fandom-k-oneteam.netlify.app/',
    },
    highlights: [
      '팀장을 맡아 진행한 프로젝트',
      'SCSS, 슬라이더 등 다양한 라이브러리를 사용',
    ],
    description: '아하는 아이돌에게 후원, 투표 등 기능을 제공하는 팬덤 플랫폼',
  },
];
