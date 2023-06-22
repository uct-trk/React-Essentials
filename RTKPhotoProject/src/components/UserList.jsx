import React from 'react';
import { useAddUserMutation, useFetchUsersQuery } from '../store';
import { Button, CircularProgress, Skeleton, Stack, Typography } from '@mui/material';
import UserItem from './UserItem';

const UserList = () => {
	// data: API'den gelen Pokémon verilerini içeren değişken. Bu değişken, Pokemon türünden bir nesne veya null değerini alabilir. Veriler, API isteği tamamlandığında ve başarılı bir şekilde yanıt alındığında bu değişkende tutulur.

	// error: API isteği sırasında oluşan hataları içeren değişken. Eğer bir hata oluştuysa, bu değişken ilgili hata nesnesini içerir. Hata oluşmadığı durumlarda ise null değerini alır.

	// isLoading: API isteği sırasında yüklenme durumunu belirten bir boolean değeridir. İstek gönderildiği anda true değerini alır ve istek tamamlandığında veya hata oluştuğunda false değerini alır.

	// isFetching: İstek tamamlandığında veya hata oluştuğunda bileşenin güncellenmesini tetikleyen bir değişkendir. Redux Toolkit Query, otomatik yenileme özelliği sağladığı için, mevcut verileri güncel tutmak için arka planda ek bir istek yapabilir. Bu değişken, bu arka plandaki isteğin yürütülüp yürütülmediğini belirtir. İstek çalışıyorsa true değerini, aksi takdirde false değerini alır.

	const { data, isLoading, isError, isFetching } = useFetchUsersQuery();
	const [addUser, result] = useAddUserMutation();

	let content;
	if (isFetching && isLoading) {
		content = <Skeleton variant="rectangular" sx={{ width: '100%', height: '600px' }} />;
		return content;
	} else if (isError) {
		content = <div>Hata var</div>;
		return content;
	} else {
		content = data?.map((user) => {
			return <UserItem key={user.id} user={user} />;
		});
	}

	const handleUserAdd = async () => {
		return await addUser().unwrap();
	};

	return (
		<div>
			<Stack direction={'row'} justifyContent={'space-between'} margin={5}>
				<Typography component={'h1'} fontSize={26}>
					Kişiler
				</Typography>
				<Button color="info" variant="contained" onClick={handleUserAdd} disabled={result.isLoading}>
					{result.isLoading ? <CircularProgress style={{ width: '25px', height: '25px' }} /> : <span>Kişi Ekle</span>}
				</Button>
			</Stack>
			{content}
		</div>
	);
};

export default UserList;
