import Datas from './components/Datas';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);

  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div className>
      {Datas.map((data, index) => (
        <button
          className="border border-gray-500 mb-4 px-2 bg-gray-100 hover:bg-gray-300 rounded-sm"
          onClick={contentChange}
          value={index}
        >
          {data.tab} {index}
        </button>
      ))}
      <p>{Datas[index].content}</p>
    </div>
  );
}

export default App;
