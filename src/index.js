import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import Routing from "./routes";
import "./sass/app.scss";
import {store} from './store/index'
import  "./utils/i18n/i18next";


ReactDOM.render(
<Suspense fallback={<div>hello</div>}>
    <Provider store={store}>
        <Routing/>
    </Provider>
    </Suspense>
    ,
    document.getElementById('root')
);

reportWebVitals();
