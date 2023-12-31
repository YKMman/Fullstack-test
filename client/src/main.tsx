import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import   ReactDOM from 'react-dom/client'
import   React from 'react'


import './index.css'
import { router } from './routes/router'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
