import AFD from "./util/AFD";

function App() {

  const input = "552a"
  const afd = new AFD();

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    afd.consume(char);
  }

  console.log(afd);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
