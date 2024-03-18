import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountButton } from './components/CountButton'

function App() {
  const [isChecked, setIsChecked] = useState(false);

  // この関数は再レンダリングの時に再作成されるため、
  // CountButton の props が変化して、 CountButton が再レンダリングされる
  // --> useCallback で再レンダリングされても無視することで回避できる
  const handleSubmit = useCallback(() => {
    console.log('Submit!!!!!');
  }, [])

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
        <CountButton handleClick={handleSubmit}/>
        <p>
          Status: {isChecked ? 'Checked!!!' : '...'}
        </p>
        <div>
          <label>
            <input type="checkbox" onChange={() => setIsChecked((prev) => !prev)}/> Dark Mode
          </label>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
