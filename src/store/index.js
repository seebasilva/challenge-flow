import { createStore, applyMiddleware} from "redux";
import reducers from "../reducers";
import saga from "redux-saga";
import {rootSaga} from "../sagas"

let store = null;
const sagaMiddleware = saga();

export default function configureStore() {
    const store =  createStore(
        reducers,
        {},
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)
    return store;
}

export {store}