import React from 'react';
import { Container, Grid } from '@mui/material';
import { MainTopBar } from './top-bar';

export const MainLayout = ({ children }) => {
    return (
        <Container maxWidth="" sx={{ padding: '0 !important' }}>
            <Grid container direction="column">
                <Grid item>
                    <MainTopBar />
                </Grid>
                <br />
                <Grid item>{children}</Grid>
            </Grid>
        </Container>
    );
};
