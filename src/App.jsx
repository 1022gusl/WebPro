import { useState } from 'react';

function CounterControls({ onInc, onDec }) {
  return (
    <div className="w-28 flex justify-between">
      <button
        onClick={onInc}
        className="border px-2 rounded-md bg-gray-200 hover:bg-gray-100"
      >
        증가
      </button>
      <button
        onClick={onDec}
        className="border px-2 rounded-md bg-gray-200 hover:bg-gray-100"
      >
        감소
      </button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => setCount((c) => c + 1);
  const handleDec = () => setCount((c) => c - 1);

  return (
    <div className="m-4">
      <h1 className="text-xl font-bold">문제 2) 카운터</h1>
      <p className="my-4">현재 값: {count}</p>
      <CounterControls onInc={handleInc} onDec={handleDec} />
    </div>
  );
}
