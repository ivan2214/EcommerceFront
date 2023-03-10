import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartSice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state?.cartItems?.findIndex((item) => item._id === action.payload._id)
      if (existingIndex >= 0) {
        toast.success('Producto incrementado satisfactoriamente!', {
          duration: 2000,
          position: 'bottom-left',
          reverseOrder: true,

          // Styling
          style: {},
          className: '',
          style: {
            background: '#111827',
            color: '#ffffff',
          },

          // Custom Icon

          // Change colors of success/error/loading icon
        })
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        }
      } else {
        toast.success('Producto agregado satisfactoriamente!', {
          duration: 2000,
          position: 'bottom-left',
          reverseOrder: true,

          // Styling
          style: {},
          className: '',
          style: {
            background: '#111827',
            color: '#ffffff',
          },

          // Custom Icon

          // Change colors of success/error/loading icon
        })
        let tempProductItem = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProductItem)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action) {
      const itemIndex = state?.cartItems?.findIndex((item) => item._id === action.payload._id)
      toast.error(`Producto decrementado !`, {
        duration: 2000,
        position: 'bottom-left',
        reverseOrder: true,

        // Styling
        style: {},
        className: '',
        style: {
          background: '#111827',
          color: '#ffffff',
        },
        // Custom Icon

        // Change colors of success/error/loading icon
      })
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter((item) => item._id !== action.payload._id)

        state.cartItems = nextCartItems
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter((item) => item._id !== cartItem._id)

          state.cartItems = nextCartItems
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        return state
      })
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        },
      )
      total = parseFloat(total.toFixed(2))
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
    clearCart(state, action) {
      state.cartItems = []
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast.success(`Carrito Eliminado!`, {
        duration: 2000,
        position: 'bottom-left',
        reverseOrder: true,

        // Styling
        style: {},
        className: '',
        style: {
          background: '#111827',
          color: '#ffffff',
        },
        // Custom Icon

        // Change colors of success/error/loading icon
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSice.actions // para las action

export default cartSice.reducer //para la store
