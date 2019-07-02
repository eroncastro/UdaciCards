import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { asyncStorageSync } from './async_storage_sync';

export default applyMiddleware(asyncStorageSync);