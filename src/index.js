import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './redux/reduxStore'
import './index.css'
import { Provider } from './StoreContext'

let rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

rerenderEntireTree()

store.subscribe(() => {
  rerenderEntireTree()
})
