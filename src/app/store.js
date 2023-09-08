import { configureStore } from '@reduxjs/toolkit'
//const reduxLogger = require('redux-logger')
import navbarReducer from './features/navbar/navbarSlice'
//const logger = reduxLogger.createLogger()
const store =  configureStore({
    reducer:{
        navbar:navbarReducer,
    },
    //middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store