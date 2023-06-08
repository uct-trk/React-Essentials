import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit'teki createSlice fonksiyonu, Redux mağazasında kullanılacak bir dilim (slice) oluşturmak için kullanılan bir yardımcı işlevidir. Bir dilim, bir parça durum ve bu duruma ait eylem yaratıcıları (action creators) ve azaltıcıları (reducers) içerir.

// createSlice fonksiyonu, bir dilim oluşturmak için gerekli olan aşağıdaki öğeleri otomatik olarak oluşturur:

// Bir dilim adı (slice name): Dilimin benzersiz bir isme sahip olması gerekmektedir.
// Bir başlangıç durumu (initial state): Dilimin başlangıç durumunu temsil eden bir nesne.
// Eylem yaratıcıları (action creators): Durumu değiştirmek için kullanılan eylemleri oluşturan işlevler.
// Azaltıcılar (reducers): Eylemleri dinleyen ve durumu güncelleyen işlevler.

const initialState = {
    cartItems: [],
    quantity:0,
    total:0
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState
})

export default cartSlice.reducer