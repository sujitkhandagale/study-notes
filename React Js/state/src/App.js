
import './App.css';

function App() {
  let count = 0;

  function HandleInput() {
    count+=1;
    console.log(count);
  }
  return (
    <div className="App">
<p>{count}</p>
<button className='btn_green' onClick={HandleInput}>Add + 1</button>
&nbsp;
<button className='btn_green' onClick={HandleInput}>Remove + 1</button>
<h1>Note</h1>
    </div>
  );
}

export default App;
