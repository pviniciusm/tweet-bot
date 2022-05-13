import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyContainer = styled('div')(() => ({
    height: '120px',
    width: '100%',
    backgroundColor: 'blue',
    color: 'white',

    '@media(min-width: 750px)': {
        width: '50%',
    },
}));

const breakpoints = {
    mobile: 0,
    tablet: 1,
    desktop: 2,
};

export const Home = () => {
    const [breakpoint, setBreakpoint] = useState(breakpoints.mobile);

    const changeBreakpoint = () => {
        const size = window.innerWidth;

        if (size < 750) {
            setBreakpoint(breakpoints.mobile);
        } else if (size < 1000) {
            setBreakpoint(breakpoints.tablet);
        } else {
            setBreakpoint(breakpoints.desktop);
        }
    };

    window.addEventListener('resize', changeBreakpoint);

    useEffect(() => {
        changeBreakpoint();
    }, []);

    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Grid container direction={'column'} spacing={3}>
                    <Grid item>
                        <h1>Twitter BOT</h1>
                        <p>Growdev - 5a edição</p>
                    </Grid>
                    <Grid item>
                        <p>{breakpoint}</p>
                        <MyContainer />
                        {breakpoint > breakpoints.tablet ? (
                            <div>
                                <p>
                                    Este texto só pode estar disponível em
                                    versões tablet +
                                </p>
                            </div>
                        ) : null}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
