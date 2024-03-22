import { Suspense, useDeferredValue, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SearchResults } from "./components/SearchResults";
import { SlowList } from "./components/SlowList";

function App() {
  const [query, setQuery] = useState<string>("");

  // useDeferredValue を使うことで、データが読み込まれるまで前回の値での結果を表示させる
  // --> React は query は新しい値, deferredValue は古い値 として再レンダリングを始める
  // --> サスペンドした場合（Promise が throw された場合）、React は新しい値での再レンダリングを放棄する（古い値を表示し続ける）

  // ! --> useDeferredValue はデータフェッチを最適化しない
  // ! キーストロークごとにデータフェッチは行われている

  // この行をコメントアウトして SearchResults に query を直接渡すと、
  // inputへの入力を変化させた際に、毎回 Loading... が表示される
  const deferredValue = useDeferredValue(query);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <label>
          Search albums:
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        {/* <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults query={deferredValue} />
        </Suspense> */}
        <SlowList text={deferredValue} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
