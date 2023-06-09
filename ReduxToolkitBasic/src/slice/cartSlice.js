import { createSlice } from '@reduxjs/toolkit';
import courseItems from '../courseItems'
// Redux Toolkit'teki createSlice fonksiyonu, Redux mağazasında kullanılacak bir dilim (slice) oluşturmak için kullanılan bir yardımcı işlevidir. Bir dilim, bir parça durum ve bu duruma ait eylem yaratıcıları (action creators) ve azaltıcıları (reducers) içerir.

// createSlice fonksiyonu, bir dilim oluşturmak için gerekli olan aşağıdaki öğeleri otomatik olarak oluşturur:

// Bir dilim adı (slice name): Dilimin benzersiz bir isme sahip olması gerekmektedir.
// Bir başlangıç durumu (initial state): Dilimin başlangıç durumunu temsil eden bir nesne.
// Eylem yaratıcıları (action creators): Durumu değiştirmek için kullanılan eylemleri oluşturan işlevler.
// Azaltıcılar (reducers): Eylemleri dinleyen ve durumu güncelleyen işlevler.

const initialState = {
    cartItems: courseItems,
    quantity:4,
    total:0
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = []
      },
      deleteCourse: (state, action) => {
        state.cartItems = state.cartItems.filter((course) => course.id !== action.payload)
      },
      increamentCourse: (state,action) => {
       const cartItem = state.cartItems.find((item) => item.id === action.payload)
        cartItem.quantity += 1
      },
      decreamentCourse: (state,action) => {
        const cartItem = state.cartItems.find((item) => item.id === action.payload)
        cartItem.quantity -= 1
        if(cartItem.quantity === 0){
         state.cartItems = state.cartItems.filter((course) => course.id !== action.payload)
        }
      },
      calculateTotalPrice:(state) => {
       let total= 0;
       let quantity = 0;
       state.cartItems.forEach((item) => {
          total += item.quantity * item.price
          quantity += item.quantity
       })
       state.total = total
       state.quantity = quantity
      }
    }
})

export const {clearCart,deleteCourse,increamentCourse,decreamentCourse,calculateTotalPrice} = cartSlice.actions

export default cartSlice.reducer