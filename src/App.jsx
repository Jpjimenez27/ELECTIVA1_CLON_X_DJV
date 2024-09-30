import React from 'react';
import {  BrowserRouter } from 'react-router-dom';
import {AppRouter} from './routes/AppRouter';

const App = () => {

    return (
        <BrowserRouter>
           <AppRouter/>
        </BrowserRouter>
        //  <Main />
    );

};

export default App;