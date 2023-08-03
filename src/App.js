import { useEffect, useState } from 'react';
import './App.css';
import Employee from './Employee';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  }, [count])
  useEffect(() => {
    console.log('useEffect1');
  }, [count1])
  /* console.warn('Work 1'); */
  return (
    <div className="App">
      {/* <div>useEffec Demo! Count {count}</div>
      <div>useEffec Demo1! Count1 {count1}</div> */}
      <Employee count={count} count1={count1} />
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setCount1(count1 + 2)}>Update count1</button>
    </div>
  );
}

export default App;
