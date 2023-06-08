import { configureStore } from '@reduxjs/toolkit';

// configureStore işlevi, Redux Toolkit tarafından sağlanan bir yardımcı işlevdir. Bu işlev, bir Redux mağazasını yapılandırmak için kullanılır.

// Redux Toolkit, Redux kullanımını kolaylaştıran bir kütüphanedir ve çeşitli yardımcı işlevler ve özellikler sağlar. configureStore işlevi, birkaç ön ayarı yapılandırmak için kullanılan bir araçtır ve Redux mağazasını oluşturmayı basitleştirir.

const store = configureStore({
	reducer: {},
});

export default store;
