import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    text: {
        color: 'white',
        opacity: 1,
        margin: 20,
        fontSize: 18
    },
    h1: {
        color: 'white',
        margin: 20,
        fontSize: 36
    },
    paper: {
        marginTop: 100,
        width: '70%',
        height: 450,
        opacity: 0.8,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export default function Intro(){

    const classes = useStyles();

    return(
    <Paper className={classes.paper}>
        <Typography className={classes.h1} variant="h1">Kennel särkivaaran australian paimenkoirat</Typography>
        <Typography className={classes.text} variant='p'>Australian paimerkoirakasvatusta vuodesta 2001</Typography>
    </Paper>
    )

}