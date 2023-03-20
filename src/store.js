import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk), 

    //codigo para que funcione la aplicacion en cualquier navegador aunque no tenga instalado el Redux Devtools
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;