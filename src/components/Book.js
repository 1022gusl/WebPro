function Book(props) {
  const { title, author, description } = props.data;

  return (
    <article>
      <h1 className="font-bold text-lg mb-4">{title}</h1>
      <span>{author}</span>
      <p className="mt-4">{description}</p>
    </article>
  );
}

export default Book;
