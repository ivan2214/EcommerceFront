import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import { store } from '@/redux/store/index'
import { router } from '@/router/index'
import { RouterProvider, Outlet } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </Provider>
    ,
  </PersistGate>,
)
