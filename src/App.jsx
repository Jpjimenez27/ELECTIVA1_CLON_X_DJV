import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const App = () => {

    return (
        <PrimeReactProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </PrimeReactProvider>
        //  <Main />
    );

};

export default App;