

import {createStore} from 'redux'

import {todoReducer} from './todoReducer'

function configureStore(){
    return createStore(todoReducer)
}

export {
    configureStore
};