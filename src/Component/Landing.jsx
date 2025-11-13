import { Link, useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[60vh] flex flex-col items-center text-center gap-8">
      <div className="mt-6 sm:mt-10">
        <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm">
          Welcome
        </span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
        꾸준함으로 성장하는 개발자,
        <br className="hidden sm:block" />
        <span className="text-blue-600">박연학</span>입니다.
      </h2>

      <p className="max-w-2xl text-gray-600">
        프로젝트로 증명하고, 글로 정리하고, 노력으로 개선합니다.
        <br /> 아래 버튼을 눌러 포트폴리오 메인으로 이동하세요.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/home"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          더 알아보기
        </Link>
        <button
          onClick={() => navigate('/project')}
          className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50"
        >
          먼저 프로젝트 보기
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-12 w-full">
        {[
          {
            title: '주요 스택',
            desc: 'TypeScript · React · Next · Zustand',
          },
          { title: '핵심 가치', desc: '문제정의 → 원인분석 → 지표개선' },
          { title: '협업', desc: 'PR 리뷰 중심, 이슈 템플릿' },
        ].map((f) => (
          <div key={f.title} className="border rounded-2xl p-6 text-left">
            <div className="font-semibold">{f.title}</div>
            <div className="text-gray-600 text-sm mt-1">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
