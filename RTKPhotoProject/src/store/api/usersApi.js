import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker';

// 1 saniyelik gecikme ile response alıyoruz. Loading kullanımını test etme amaçlı yapılan bir geliştirmedir
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve,duration)
    })
}

// createApi fonksiyonu ile bir API servisi tanımlanmaktadır.
export const usersApi = createApi({
    // reducerPath özelliği, oluşturulan reducer'ın Redux store içindeki yolunu belirtmektedir.
    reducerPath:'users',
    // baseQuery özelliği, temel istek yapılandırmasını sağlamak için fetchBaseQuery fonksiyonunu kullanmaktadır.
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000',
        fetchFn:async (...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),
    // endpoints özelliği, servisin beklendiği endpointleri tanımlamaktadır.
    endpoints(builder){
        return {
            // builder.query fonksiyonu ile bir sorgu tanımlanmaktadır. 
            fetchUsers:builder.query({
                query: () => {
                    return {
                        url: '/users',
                        method:'GET'
                    }
                },
                // Provide Tag (Sağlama Etiketi):
                //  "Provide tag" (sağlama etiketi), belirli bir API isteğinin sonucunun önbelleğe kaydedilmesini sağlayan bir işaretleyicidir. Redux Toolkit Query, API yanıtlarını önbelleğe almak ve gelecekteki isteklerde kullanmak için sağlama etiketlerini kullanır. Bu, tekrarlayan isteklerin ağ trafiğini azaltır ve performansı artırır.
                providesTags:['User']
            }),
            // kullanıcı ekleme
            addUser:builder.mutation({
                query: () => {
                    return {
                        url: '/users',
                        method:'POST',
                        body: {
                            name:faker.internet.userName()
                        }
                    }
                },
                // Invalidate Tag (Geçerlilik Etiketi):
                // "Invalidate tag" (geçerlilik etiketi), önbelleğe alınmış verinin geçerliliğini sonlandırmak ve güncellemek için kullanılan bir işaretleyicidir. Redux Toolkit Query, bir API isteği yapıldığında veya veri değiştirildiğinde ilgili önbellek etiketlerini geçersiz kılar ve bu etiketlerle ilişkili veriyi yeniden alır.
                invalidatesTags: () => {
                    return [{type:'User'}]
                }
            }),
            removeUser:builder.mutation({
                query: (user) => {
                    
                    return {
                        url: `/users/${user.id}`,
                        method:`DELETE`,
                    }
                },
                invalidatesTags: () => {
                    return [{type:'User'}]
                }
            })
        }
    }
})

export const {useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation} = usersApi