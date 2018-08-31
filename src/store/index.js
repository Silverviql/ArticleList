import {createStore, applyMiddleware} from 'redux'
import reduser from '../reducer/index'
import logger from '../middlewars/logger'
import randomId from '../middlewars/randomId'

const enhancer = applyMiddleware(randomId,logger)


const store = createStore(reduser,{}, enhancer)

//dev.only
window.store = store

export default store