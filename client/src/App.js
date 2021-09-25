import React, {useEffect} from 'react';
import {AppBar, Container, Grid, Grow, Typography} from "@material-ui/core";
import ig_logo from './images/ig_logo.png'
import Posts from './components/Posts/Posts'
import {getPosts} from "./actions/posts";
import Form from './components/Form/Form'
import useStyles from './styles'
import {useDispatch} from "react-redux";

//imports


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    // this used the useStyles class and its methods
    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>
                    Instoogram
                </Typography>
                <img className={classes.image} src={ig_logo} alt="instagram logo" height='70'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App