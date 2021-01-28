import classes from './style/App.module.scss'

const App = () => {
  const hi = 'Hello JSX!'
  return (
    <div>
      <h1 class="text-center">{hi}</h1>
      <div class={classes.title}>Css Modules</div>
    </div>
  )
}

export default App
