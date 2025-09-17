import Book from './components/Book';
import Datas from './components/Datas';

export default function App() {
  return (
    <section className="flex flex-col gap-8">
      {Datas.map((data) => (
        <Book key={data.id} data={data} />
      ))}
    </section>
  );
}
