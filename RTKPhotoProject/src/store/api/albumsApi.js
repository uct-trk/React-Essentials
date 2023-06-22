import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker';

// 1 saniyelik gecikme ile response alıyoruz. Loading kullanımını test etme amaçlı yapılan bir geliştirmedir
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve,duration)
    })
}

// createApi fonksiyonu ile bir API servisi tanımlanmaktadır.
export const albumsApi = createApi({
    // reducerPath özelliği, oluşturulan reducer'ın Redux store içindeki yolunu belirtmektedir.
    reducerPath:'albums',
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
            fetchAlbums:builder.query({
                query: (user) => {
                    return {
                        url: '/albums',
                        method:'GET',
                        params: {
                            userId:user.id
                        }
                    }
                },
                // Provide Tag (Sağlama Etiketi):
                // 1. paramete en pointten gelen veriler
                // 2. parametre hata yonetimi yapmamızı sağlar
                // 3. parametre gonderilen obje
               providesTags:(result,error,user) => {
                console.log(result)
                    const tags = result.map((album) => {
                        console.log(album)
                        return {type:'Album', id:album.id}
                    })
                    tags.push({type:'UsersAlbum', id:user.id})
                    console.log(tags)
                    return tags
               }
            }),
            // kullanıcı ekleme
            addAlbum:builder.mutation({
                query: (user) => {
                    return {
                        url: '/albums',
                        method:'POST',
                        body: {
                            userId: user.id,
                            name:faker.commerce.productName()
                        }
                    }
                },
                // Invalidate Tag (Geçerlilik Etiketi):
                // "Invalidate tag" (geçerlilik etiketi), önbelleğe alınmış verinin geçerliliğini sonlandırmak ve güncellemek için kullanılan bir işaretleyicidir. Redux Toolkit Query, bir API isteği yapıldığında veya veri değiştirildiğinde ilgili önbellek etiketlerini geçersiz kılar ve bu etiketlerle ilişkili veriyi yeniden alır.
               invalidatesTags: (result,error,user) => {
                    return [{type: 'UsersAlbum',id:user.id}]
               }
            }),
            removeAlbum:builder.mutation({
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method:`DELETE`,
                    }
                },
                invalidatesTags: (result,error,album) => {
                    return [{type: 'Album',id:album.id}]
               }
            })
        }
    }
})

export const {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} = albumsApi