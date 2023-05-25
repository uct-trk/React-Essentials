import { RequestProps } from './types';

const Request = ({ status }: RequestProps) => {
	let message = '';
	if (status === 'loading') {
		message = 'Yükleniyor';
	}
	if (status === 'success') {
		message = 'Yüklendi';
	}
	if (status === 'error') {
		message = 'Hata';
	}
	return <div>{message}</div>;
};

export default Request;
