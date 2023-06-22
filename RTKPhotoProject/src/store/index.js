import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from './api/usersApi'
import { albumsApi } from './api/albumsApi'

export const store = configureStore({
    reducer: {
     [usersApi.reducerPath] : usersApi.reducer,
     [albumsApi.reducerPath] : albumsApi.reducer
    },
    // middleware özelliği, mevcut varsayılan middleware'leri alır ve üzerine usersApi.middleware'i ekleyerek Redux Toolkit Query'nin sağladığı özelliklerin kullanılmasını sağlar. Bu örnekte, önbellekleme, geçersiz kılma, anlık yenileme gibi özelliklerin etkin olmasını sağlamak için usersApi.middleware kullanılmıştır.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware),
  })

  // setupListeners fonksiyonu, Redux Toolkit Query tarafından sağlanan olay dinleyicilerini ayarlar. Bu örnekte, store.dispatch fonksiyonu ile birlikte çağrılmıştır. Bu sayede, API'ye yapılan isteklerin yeniden odaklanma veya yeniden bağlantı gibi olaylarla otomatik olarak yeniden yapılması sağlanır.
  setupListeners(store.dispatch)

  export {useFetchUsersQuery,useAddUserMutation,useRemoveUserMutation} from './api/usersApi'
  export {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} from './api/albumsApi'