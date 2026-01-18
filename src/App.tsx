import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p style={{ color: '#888' }}>
        Deployed on Easypanel via Dockerfile!
      </p>
    </div>
  )
}

export default App
