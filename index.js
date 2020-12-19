import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'

import App from './App'



function render() {
  //Insert inside <root-id> element <App>

  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
}
store.subscribe(render)
render()
