import { Box, Container } from '@mui/material';
import React from 'react';

export const MainTopBar = () => {
    return (
        <Box
            sx={{
                color: 'white',
                padding: '10px',
                backgroundColor: 'rgb(16,10,124)',
                background:
                    'linear-gradient(90deg, rgba(16,10,124,1) 0%, rgba(9,9,157,1) 18%, rgba(0,83,255,1) 100%)',
            }}
        >
            <Container maxWidth="md">
                <h1>Top Bar</h1>
            </Container>
        </Box>
    );
};
