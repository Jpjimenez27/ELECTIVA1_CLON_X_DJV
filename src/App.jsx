import React from 'react';
import { Home } from './home/Home'
import { Main } from './main/Main';
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