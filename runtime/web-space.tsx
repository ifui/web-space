const createApp = (Vnode: JSX.Element) => {
  if (!document.getElementById('app')) {
    const newDiv = document.createElement('div')
    newDiv.id = 'app'
    document.body.appendChild(newDiv)
  }
  const app = document.getElementById('app') as HTMLElement
  app.innerHTML = Vnode
}

export { createApp }
