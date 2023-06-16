import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// createApi fonksiyonu ile bir API servisi tanımlanmaktadır.
export const usersApi = createApi({
    // reducerPath özelliği, oluşturulan reducer'ın Redux store içindeki yolunu belirtmektedir.
    reducerPath:'users',
    // baseQuery özelliği, temel istek yapılandırmasını sağlamak için fetchBaseQuery fonksiyonunu kullanmaktadır.
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000'
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
                }
            }),
            // kullanıcı ekleme
            addUser:builder.mutation({
                query: () => {
                    return {
                        url: '/users',
                        method:'POST',
                        body: {
                            name:'Merhaba'
                        }
                    }
                }
            }),
            removeUser:builder.mutation({
                query: (user) => {
                    return {
                        url: '/users',
                        method:`DELETE/${user}`,
                    }
                }
            })
        }
    }
})

export const {useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation} = usersApi