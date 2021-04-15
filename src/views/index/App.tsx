import classes from './style/App.module.scss'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [num, setNum] = useState(0)

  return (
    <div className={classes.title}>
      hello Anujs!
      <div>
        <button onClick={() => setNum(num + 1)}>+1</button>
      </div>
      <p>Test:{num}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
