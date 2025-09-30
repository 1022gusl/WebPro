function Article({ title, body }) {
  return (
    <article>
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      {body}
    </article>
  );
}
export default Article;
