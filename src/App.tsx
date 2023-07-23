import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'
import { StepInfo } from './components/StepInfo'

const sampleData = {
  "steps": [
    {
      "boothes": [
        {
          "boothId": "Booth 1-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        }
      ]
    }, 
    {
      "boothes": [
        {
          "boothId": "Booth 2-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
        {
          "boothId": "Booth 2-2",
          "status": "idle",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
      ]
    },
    {
      "boothes": [
        {
          "boothId": "Booth 3-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
        {
          "boothId": "Booth 3-1",
          "status": "busy",
          "tagId": "strawberry",
          "startTime": 123456789,
          "operator": "諏訪 太郎"
        },
      ]
    },
  ]
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeader />
      <StepInfo />
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
