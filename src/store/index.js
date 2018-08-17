import {createStore, applyMiddleware} from 'redux'
import reduser from '../reducer'
import logger from '../middlewars/logger'

const enhancer = applyMiddleware(logger)

const store = createStore(reduser,{}, enhancer)

//dev.only
window.store = store

export default store