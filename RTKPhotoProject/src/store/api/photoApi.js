import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker';

// 1 saniyelik gecikme ile response alıyoruz. Loading kullanımını test etme amaçlı yapılan bir geliştirmedir
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve,duration)
    })
}

// createApi fonksiyonu ile bir API servisi tanımlanmaktadır.
export const photoApi = createApi({
    // reducerPath özelliği, oluşturulan reducer'ın Redux store içindeki yolunu belirtmektedir.
    reducerPath:'photo',
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
            fetchPhoto:builder.query({
                query: (album) => {
                    return {
                        url: '/photo',
                        method:'GET',
                        params: {
                            albumId:album.id
                        }
                    }
                },
                // Provide Tag (Sağlama Etiketi):
                // 1. paramete en pointten gelen veriler
                // 2. parametre hata yonetimi yapmamızı sağlar
                // 3. parametre gonderilen obje
               providesTags:(result,error,album) => {
                    const tags = result?.map((photo) => {
                      
                        return {type:'Photo', id:photo.id}
                    })
                    tags.push({type:'AlbumPhoto', id:album.id})
                    return tags
               }
            }),
            // kullanıcı ekleme
            addPhoto:builder.mutation({
                query: (album) => {
                    return {
                        url: '/photo',
                        method:'POST',
                        body: {
                            albumId: album.id,
                            url:faker.image.urlPicsumPhotos(),
                            name: faker.name.firstName()
                           
                        }
                    }
                },
                // Invalidate Tag (Geçerlilik Etiketi):
                // "Invalidate tag" (geçerlilik etiketi), önbelleğe alınmış verinin geçerliliğini sonlandırmak ve güncellemek için kullanılan bir işaretleyicidir. Redux Toolkit Query, bir API isteği yapıldığında veya veri değiştirildiğinde ilgili önbellek etiketlerini geçersiz kılar ve bu etiketlerle ilişkili veriyi yeniden alır.
               invalidatesTags: (result,error,album) => {
                    return [{type: 'AlbumPhoto',id:album.id}]
               }
            }),
            removePhoto:builder.mutation({
                query: (photo) => {
                    return {
                        url: `/photo/${photo.id}`,
                        method:`DELETE`,
                    }
                },
                invalidatesTags: (result,error,photo) => {
                    return [{type: 'Photo',id:photo.id}]
               }
            })
        }
    }
})

export const {useFetchPhotoQuery, useAddPhotoMutation, useRemovePhotoMutation} = photoApi