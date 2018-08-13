import {createStore} from 'redux'
import reduser from '../reducer'

const store = createStore(reduser)

//dev.only
window.store = store

export default store