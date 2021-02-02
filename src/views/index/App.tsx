import classes from './style/App.module.scss'
import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    const hi = 'Hello Anujs!'
    return <div className={classes.title}>{hi}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
