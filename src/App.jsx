function App() {
  const name = '김창복';
  const isStudent = true;
  const hobbies = ['프로그래밍', '독서', '산책'];
  const skills = ['React', 'JavaScript', 'Node.js', 'HTML/CSS'];
  const projects = [
    { title: '개인 블로그', link: '#' },
    { title: '쇼핑몰 클론코딩', link: '#' },
    { title: '포트폴리오 웹사이트', link: '#' },
  ];

  return (
    <div className="profile">
      <h1 className="text-2xl font-bold">{name}의 포트폴리오</h1>
      <div className="mt-5">
        <p>{isStudent ? '현재 학생입니다.' : '현재 학생이 아닙니다.'}</p>
        <div className="my-3">
          <h2 className="text-xl font-bold flex items-center gap-1 mb-1">
            <span role="img" aria-label="기술">
              💻
            </span>
            기술 스택
          </h2>
          <ul className="list-disc list-inside">
            {skills.map((skill, i) => (
              <li className="ml-4" key={i}>
                {skill}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold flex items-center gap-1 mb-1">
            <span role="img" aria-label="취미">
              📚
            </span>
            취미
          </h2>
          <ul className="list-disc list-inside">
            {hobbies.map((hobby, i) => (
              <li className="ml-4" key={i}>
                {hobby}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold flex items-center gap-1 mb-1">
            <span role="img" aria-label="프로젝트">
              📂
            </span>
            프로젝트
          </h2>
          <ul className="list-disc list-inside">
            {projects.map((project, i) => (
              <li className="ml-4" key={i}>
                <a href={project.link}>{project.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <label htmlFor="input">한 마디:</label>
        <input
          className="border border-black rounded-sm"
          placeholder="자유롭게 입력하세요"
          id="input"
          type="text"
        />
      </div>
    </div>
  );
}

export default App;
