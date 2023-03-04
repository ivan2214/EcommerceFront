import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import LayoutPublic from '@/Layout/LayoutPublic'
import NotFound from '@/pages/NotFound'
import ProtectedRoute from '@/pages/ProtectedRoute'
import Account from '@/pages/Account'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import ProductDetail from '@/pages/ProductDetail'
import Favorite from '@/pages/Favorite'
import AdminPanel from '@/pages/AdminPanel'

const user = {
  autenticated: true,
  admin: false,
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:name',
        element: <Products />,
      },
      {
        path: '/products/category/:cat',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: (
          <ProtectedRoute isAllowed={!user.admin} redirectTo={'/admin'}>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/account',
        element: (
          <ProtectedRoute isAllowed={user.autenticated} redirectTo={'/login'}>
            <Account />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: (
          <ProtectedRoute redirectTo={'/account'}>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: '/favorite',
        element: (
          <ProtectedRoute isAllowed={user.autenticated} redirectTo={'/login'}>
            <Favorite />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin',
        element: (
          <ProtectedRoute isAllowed={user.admin} redirectTo={'/login'}>
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
