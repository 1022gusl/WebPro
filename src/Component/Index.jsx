export default function Index() {
  const url = `https://github.com/1022gusl`;
  return (
    <section className="card">
      <h2 className="font-semibold text-2xl text-orange-500">
        안녕하세요! 저는 박연학이라고합니다.
      </h2>
      <p className="mt-4">
        저는 프론트엔드 개발자를 꿈꾸며 공부 하고 있는 학생입니다.
      </p>
      <p>
        컴퓨터공학을 전공하고 있으며, 부족하지만 프론트엔드 최신 트렌드를
        따라가며 다양한 프로젝트 경험을 쌓으려 노력하고 있습니다.
      </p>
      <div className="flex gap-1 mt-20">
        <p>깃허브 링크: </p>
        <a className="text-blue-400" href={url}>
          github
        </a>
      </div>
    </section>
  );
}
