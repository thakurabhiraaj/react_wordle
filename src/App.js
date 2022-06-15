import { useEffect, useState } from "react";
function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("/solutions")
      .then(res => res.json())
      .then(json => {
        const randomPick = json[Math.floor(Math.random() * json.length)];
        setSolution(randomPick.word);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <div>Solution is {solution}</div>}
    </div>
  );
}

export default App;