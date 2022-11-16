import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '~/features/Modal/ModalSlice';
import chatReducer from '~/features/Chat/ChatSlice';
import profileReducer from '~/features/Profile/ProfileSlice';

const rootReducer = { modal: modalReducer, chat: chatReducer, profile: profileReducer };

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
