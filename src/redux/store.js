import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/index';
import devToolsEnhancer from 'remote-redux-devtools';


const store = configureStore({ reducer: reducers })

export default store;