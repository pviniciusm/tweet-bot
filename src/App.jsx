import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from './config/theme/main';
import { store } from './store';
import { MainRouter } from './routes';
import { MainLayout } from './config/layout/main';

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <MainLayout>
                        <MainRouter />
                    </MainLayout>
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    );
}

export default App;
